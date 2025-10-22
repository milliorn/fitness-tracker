// Verifies the MUI Avatar renders an <img>, points at the right URL,
// and that the browser actually decoded it (naturalWidth > 0).

describe("Home avatar", () => {
  it("shows and loads the monolith image", () => {
    cy.visit("/");

    // MUI Avatar renders an <img> when `src` is provided
    cy.get('img[alt="Homepage Logo"]', { timeout: 10000 })
      .should("be.visible")
      // sanity: correct path (works whether absolute or relative)
      .should("have.attr", "src")
      .then(($img) => {
        const el = $img[0] as HTMLImageElement;
        // Prove we loaded a monolith webp candidate, regardless of src/srcset pick
        const chosen = el.currentSrc || el.src || "";
        expect(chosen).to.match(/\/monolith.*\.webp$/);
      });

    // ensure image finished loading and decoded successfully
    cy.get('img[alt="Homepage Logo"]').should(($img) => {
      const el = $img[0] as HTMLImageElement;
      // the image finished loading
      expect(el.complete, "image is complete").to.eq(true);
      // decoded: 0 means broken/missing
      expect(el.naturalWidth, "image naturalWidth").to.be.greaterThan(0);
    });
  });

  it("has the login/register buttons next to the avatar", () => {
    cy.visit("/");
    cy.get("#home-login-register-buttons").within(() => {
      cy.contains("button", /login/i).should("be.visible");
      cy.contains("button", /register/i).should("be.visible");
    });
  });
});

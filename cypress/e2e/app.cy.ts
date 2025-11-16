// Verifies the MUI Avatar renders an <img>, the browser decodes it,
// and the chosen candidate is a monolith WebP (srcset-safe).

describe("Home avatar", () => {
  it("shows and loads the monolith image", () => {
    cy.visitHome();

    // Single retryable assertion: Cypress keeps retrying until ALL pass.
    cy.getAvatar()
      .assertImageDecoded()
      .then(($img) => {
        const el = $img[0] as HTMLImageElement;
        // Be robust to srcset + absolute/relative URLs (+ optional query strings)
        const chosen = el.currentSrc || el.src || "";
        expect(
          chosen,
          `chosen src (${chosen}) should be a monolith webp`,
        ).to.match(/\/monolith.*\.webp(?:\?.*)?$/);
      });
  });

  it("has the login/register buttons next to the avatar", () => {
    cy.visitHome();
    cy.get("#home-login-register-buttons").within(() => {
      cy.get('[data-cy="login-cta"]')
        .should("be.visible")
        .and("have.attr", "href", "/login");

      cy.get('[data-cy="register-cta"]')
        .should("be.visible")
        .and("have.attr", "href", "/register");
    });
  });
});

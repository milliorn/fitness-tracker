// cypress/e2e/app.cy.ts

// Verifies the MUI Avatar renders an <img>, the browser decodes it,
// and the chosen candidate is a monolith WebP (srcset-safe).

describe("Home avatar", () => {
  it("shows and loads the monolith image", () => {
    cy.visit("/");

    // Single retryable assertion: Cypress keeps retrying until ALL pass.
    cy.get('img[alt="Homepage Logo"]', { timeout: 10000 }).should(($img) => {
      const el = $img[0] as HTMLImageElement;

      // Prove the image actually finished loading & decoding
      expect(el.complete, "image is complete").to.eq(true);
      expect(el.naturalWidth, "image naturalWidth").to.be.greaterThan(0);

      // Be robust to srcset + absolute/relative URLs (+ optional query strings)
      const chosen = el.currentSrc || el.src || "";
      expect(
        chosen,
        `chosen src (${chosen}) should be a monolith webp`,
      ).to.match(/\/monolith.*\.webp(?:\?.*)?$/);
    });
  });

  it("has the login/register buttons next to the avatar", () => {
    cy.visit("/");
    cy.get("#home-login-register-buttons").within(() => {
      //   cy.contains("button", /login/i).should("be.visible").and("have.attr", "href", "/login");
      //   cy.contains("button", /register/i).should("be.visible").and("have.attr", "href", "/register");
      cy.get('[data-cy="login-cta"]')
        .should("be.visible")
        .and("have.attr", "href", "/login");

      cy.get('[data-cy="register-cta"]')
        .should("be.visible")
        .and("have.attr", "href", "/register");
    });
  });
});

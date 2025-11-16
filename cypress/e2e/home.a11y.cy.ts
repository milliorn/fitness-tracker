describe("Home CTA accessibility", () => {
  it("focus order Login -> Register", () => {
    cy.visitHome();

    // Make sure the window & document have focus before tabbing
    cy.window().then((w) => w.focus());
    // prime focus in headless runs
    cy.get("body").click(0, 0);
    // Use real keyboard events if available
    cy.realPress("Tab");

    cy.get('[data-cy="login-cta"]').should("have.focus");

    cy.realPress("Tab");

    cy.get('[data-cy="register-cta"]').should("have.focus");
  });

  it("Avatar has alt text", () => {
    cy.visitHome();

    // Scope to the main region your page renders
    cy.get("main").within(() => {
      // Strict check: exact alt value
      cy.get('img[alt="Homepage Logo"]').should("exist");

      // Also ensure a non-empty alt is present
      cy.get('img[alt="Homepage Logo"]')
        .should("have.attr", "alt")
        .and("match", /\S/);

      // Verify the chosen candidate, not a specific filename
      cy.get('img[alt="Homepage Logo"]').then(($img) => {
        const el = $img[0] as HTMLImageElement;
        const chosen = el.currentSrc || el.src || "";
        expect(chosen).to.match(/\/monolith.*\.webp$/);
      });
    });
  });

it("Home passes WCAG A/AA audit", () => {
  cy.visitHome();
  cy.injectAxe();

  cy.checkA11y(
    undefined,
    {
      // keep this commented/uncommented as you like
      // runOnly: {
      //   type: "tag",
      //   values: ["wcag2a", "wcag2aa"],
      // },
    },
    (violations) => {
      const summary = violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        description: v.description,
        help: v.help,
        helpUrl: v.helpUrl,
      }));

      expect(
        violations.length,
        `A11Y violations:\n${JSON.stringify(summary, null, 2)}`
      ).to.equal(0);
    }
  );
});

});

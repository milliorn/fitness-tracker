describe("Home CTA accessibility", () => {
  it("focus order Login -> Register", () => {
    cy.visitHome();

    // Make sure the window & document have focus before tabbing
    cy.window().then((w) => w.focus());
    cy.get("body").click(0, 0); // prime focus in headless runs

    // Use real keyboard events if available
    cy.realPress("Tab");
    cy.focused()
      .should(($el) => {
        // It's a real <button>
        expect($el.prop("tagName")).to.eq("BUTTON");
      })
      .should("contain.text", "Login");

    cy.realPress("Tab");
    cy.focused()
      .should(($el) => {
        expect($el.prop("tagName")).to.eq("BUTTON");
      })
      .should("contain.text", "Register");
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

      // Optional: verify the chosen candidate, not a specific filename
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
    cy.checkA11y(undefined, { runOnly: ["wcag2a", "wcag2aa"] });
  });
});

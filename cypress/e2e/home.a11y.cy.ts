describe("Home accessibility", () => {
  it("has no obvious violations", () => {
    cy.visit("/");
    cy.injectAxe();
    cy.checkA11y(undefined, { runOnly: ["wcag2a", "wcag2aa"] });
  });
});

describe("Root layout", () => {
  it('sets lang="en" on html element', () => {
    cy.visitHome();
    cy.get("html").should("have.attr", "lang", "en");
  });

  it("uses the app metadata for title and description", () => {
    cy.visitHome();
    cy.title().should("eq", "GymScry App");
    cy.get('head meta[name="description"]').should(
      "have.attr",
      "content",
      "Future Fitness App"
    );
  });
});

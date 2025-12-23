describe("Register: GitHub CTA behavior", () => {
  beforeEach(() => {
    cy.visitRegister();
  });

  it("renders the GitHub CTA", () => {
    cy.get('[data-cy="github-signin"]')
      .should("exist")
      .and("contain.text", "Continue with GitHub");
  });

  it("redirects to /login when clicked", () => {
    cy.get('[data-cy="github-signin"]').click();
    cy.location("pathname").should("eq", "/login");
  });

  it("does not submit the register form", () => {
    cy.get('[data-cy="github-signin"]').click();
    cy.location("pathname").should("eq", "/login");
  });
});

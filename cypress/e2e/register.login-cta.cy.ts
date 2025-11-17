describe("Register: Login CTA", () => {
  it("renders correctly and navigates to /login", () => {
    cy.visitRegister();

    cy.get('[data-cy="login-cta"]').as("cta");

    cy.get("@cta")
      .should("contain.text", "Log in")
      .and("have.attr", "href", "/login");

    cy.get("@cta").parent().should("contain.text", "have an account");
  });

  it("navigates to /login when the CTA is clicked", () => {
    cy.visitRegister();

    cy.get('[data-cy="login-cta"]').click();
    cy.location("pathname").should("eq", "/login");
  });
});

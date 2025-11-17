describe("Login: Register CTA", () => {
  it("renders the register CTA with correct copy and href", () => {
    cy.visitLogin();

    cy.get('[data-cy="register-cta"]').as("cta");

    cy.get("@cta")
      .should("contain.text", "Register")
      .and("have.attr", "href", "/register");

    cy.get("@cta").parent().should("contain.text", "have an account");
  });

  it("navigates to /register when the CTA is clicked", () => {
    cy.visitLogin();

    cy.get('[data-cy="register-cta"]').click();
    cy.location("pathname").should("eq", "/register");
  });
});

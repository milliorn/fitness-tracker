describe("Login: Register CTA", () => {
  beforeEach(() => {
    // use your custom helper (or cy.visit("/login") if you prefer)
    cy.visitLogin();
  });

  it("renders with correct label + href next to the question", () => {
    cy.get('[data-cy="register-cta"]')
      .as("cta")
      .should("contain.text", "Register")
      .and("have.attr", "href", "/register");

    // The surrounding copy should include the question text
    cy.get("@cta").parent().should("contain.text", "Don’t have an account?");
  });

  it("navigates to /register on click", () => {
    cy.get('[data-cy="register-cta"]').click();
    cy.location("pathname").should("eq", "/register");
  });
});

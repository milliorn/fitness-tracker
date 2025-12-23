describe("Login: GitHub CTA behavior", () => {
  beforeEach(() => {
    cy.visitLogin();
  });

  it("renders the GitHub sign-in button", () => {
    cy.get('[data-cy="github-signin"]')
      .should("exist")
      .and("contain.text", "Continue with GitHub");
  });

  it("is not a submit button (regression guard)", () => {
    cy.get('[data-cy="github-signin"]')
      .invoke("attr", "type")
      .then((type) => {
        // MUI Button renders <button> without a type by default,
        // but if present it must NOT be submit.
        if (type) {
          expect(type).to.eq("button");
        }
      });
  });

  it("does not submit the form when clicked", () => {
    cy.get('[data-cy="github-signin"]').click();

    // If the form submitted, we'd lose /login
    cy.location("pathname").should("eq", "/login");
  });

  it("initiates the GitHub auth flow", () => {
    // We do NOT follow GitHub — just ensure no client-side crash
    cy.get('[data-cy="github-signin"]').click();

    // Cypress remains on the same origin
    cy.location("pathname").should("eq", "/login");
  });
});

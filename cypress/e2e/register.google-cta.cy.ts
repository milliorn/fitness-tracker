describe("Register: Google CTA behavior", () => {
  it("shows a link-styled button to /login and never submits the form", () => {
    cy.visitRegister();

    // Ensure the CTA renders as an anchor to /login
    cy.contains('a[href="/login"]', "Continue with Google")
      .as("googleCta")
      .should("exist");

    // Regression guard: ensure it's not a submit button. Refactor in future.
    cy.get("@googleCta")
      .invoke("attr", "type")
      .then((type) => {
        // MUI <Button component="a"> typically renders <a> without a type attr.
        // If a type attr is present, we assert it's "button".
        if (type) expect(type).to.eq("button");
      });

    // Clicking should navigate to /login (and NOT trigger form submit)
    cy.get("@googleCta").click();
    cy.location("pathname").should("eq", "/login");
  });

  it("renders the AuthCta link to /login", () => {
    cy.visitRegister();

    cy.get('[data-cy="login-cta"]')
      .should("be.visible")
      .and("have.attr", "href", "/login")
      .and("contain.text", "Log in");
  });
});

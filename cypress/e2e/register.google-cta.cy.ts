describe("Register: Google CTA behavior", () => {
  it("renders the Google button and navigates to /login", () => {
    cy.visitRegister();

    // Should render exactly as an anchor to /login
    cy.contains('a[href="/login"]', "Continue with Google")
      .as("googleCta")
      .should("exist");

    // Regression guard: ensure it's not a submit button. Refactor in future.
    // Ensure this anchor is explicitly non-submit
    // MUI <Button component="a"> may render without a `type`; if present, it must be "button".
    cy.get("@googleCta")
      .invoke("attr", "type")
      .then((type) => {
        // MUI <Button component="a"> typically renders <a> without a type attr.
        // If a type attr is present, we assert it's "button".
        if (type) expect(type).to.eq("button");
      });

    // Clicking must navigate to /login and not submit the form
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

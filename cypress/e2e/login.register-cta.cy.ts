describe("Login: Register CTA (exhaustive)", () => {
  beforeEach(() => {
    cy.visitLogin();

    // stub console noise so we can assert no warnings/errors are produced
    cy.wrap(null).then(() => {
      cy.stub(console, "error").as("consoleError");
      cy.stub(console, "warn").as("consoleWarn");
    });
  });

  it("renders correctly with expected text, href, and is visible", () => {
    // CTA should exist, be visible, have correct label + href
    cy.get('[data-cy="register-cta"]')
      .as("cta")
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Register")
      .and("have.attr", "href", "/register");
  });

  it("appears inline in the sentence 'Don’t have an account? Register'", () => {
    // CTA must appear inside its surrounding sentence container
    cy.get('[data-cy="register-cta"]')
      .parent()
      .should("contain.text", "Don’t have an account?")
      .and("contain.text", "Register");
  });

  it("is an actual anchor <a> and not a button or submit element", () => {
    // ensure it stays a link (future refactors should not turn it into a button)
    cy.get('[data-cy="register-cta"]')
      .should("have.prop", "tagName")
      .should("match", /A/i);

    // ensure it's not treated as a submit button
    cy.get('[data-cy="register-cta"]')
      .invoke("attr", "type")
      .should((type) => {
        if (type) expect(type).to.not.eq("submit");
      });
  });

  it("does NOT trigger the login form submit handler", () => {
    // spy on form submission to make sure the CTA never submits the form
    cy.get("form").then(($form) => cy.wrap($form[0]).as("formEl"));

    cy.get("@formEl").then((form) => {
      cy.spy(form, "submit").as("submitSpy");
    });

    cy.get('[data-cy="register-cta"]').click();
    cy.get("@submitSpy").should("not.have.been.called");
  });

  it("navigates to /register on click", () => {
    // clicking the CTA should navigate properly
    cy.get('[data-cy="register-cta"]').click();
    cy.location("pathname").should("eq", "/register");
  });

  it("activates navigation via keyboard (Enter key)", () => {
    // Enter key should activate links per standard HTML behavior
    cy.get('[data-cy="register-cta"]').focus().realPress("Enter");
    cy.location("pathname").should("eq", "/register");
  });

  it("does NOT activate navigation via Space (correct behavior)", () => {
    // Space should NOT activate <a> links; this asserts correct browser behavior
    cy.get('[data-cy="register-cta"]').focus().realPress("Space");
    cy.location("pathname").should("eq", "/login");
  });

  it("is focusable and shows a visible focus indicator", () => {
    // ensure keyboard users can see focus ring
    cy.get('[data-cy="register-cta"]')
      .focus()
      .should("have.css", "outline-style")
      .and("not.equal", "none");
  });

  it("is reachable by keyboard after the primary action", () => {
    cy.get('[data-cy="google-signin"]').focus();

    cy.realPress("Tab"); // Discord
    cy.focused().should("have.attr", "data-cy", "discord-signin");

    cy.realPress("Tab"); // Register
    cy.focused().should("have.attr", "data-cy", "register-cta");
  });

  it("has no accessibility violations with Axe", () => {
    cy.injectAxe();
    cy.checkA11y(undefined, undefined, (violations) => {
      console.log(JSON.stringify(violations, null, 2));
    });
  });

  it("has no unexpected ARIA attributes", () => {
    // ensure CTA doesn't carry accidental aria-* props
    cy.get('[data-cy="register-cta"]').then(($el) => {
      const ariaAttrs = [...$el[0].attributes]
        .map((a) => a.name)
        .filter((n) => n.startsWith("aria-"));

      expect(ariaAttrs.length).to.eq(0);
    });
  });

  it("does not log console errors or warnings during render", () => {
    // ensure no runtime noise
    cy.get("@consoleError").should("not.have.been.called");
    cy.get("@consoleWarn").should("not.have.been.called");
  });
});

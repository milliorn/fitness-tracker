// cypress/e2e/home.a11y.cy.ts

describe("Home CTA accessibility", () => {
  it("focus order Login -> Register", () => {
    cy.visit("/");

    // Make sure the window & document have focus before tabbing
    cy.window().then((w) => w.focus());
    cy.get("body").click(0, 0); // prime focus in headless runs

    // Use real keyboard events if available
    cy.realPress("Tab");
    cy.focused()
      .should(($el) => {
        // It's a real <button>
        expect($el.prop("tagName")).to.eq("BUTTON");
      })
      .should("contain.text", "Login");

    cy.realPress("Tab");
    cy.focused()
      .should(($el) => {
        expect($el.prop("tagName")).to.eq("BUTTON");
      })
      .should("contain.text", "Register");
  });
});

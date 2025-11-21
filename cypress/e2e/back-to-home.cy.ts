describe("BackToHome on Login page", () => {
  beforeEach(() => {
    cy.visitLogin();
    cy.location("pathname").should("eq", "/login");
  });

  it("renders the icon button with correct attributes", () => {
    cy.get('[data-cy="back-to-home"]')
      .as("backIcon")
      .should("exist")
      .and("have.attr", "href", "/")
      .and("have.attr", "aria-label", "Back to Home");
  });

  it("renders the text link pointing to /", () => {
    cy.contains('a[href="/"]', "Back to Home").should("exist");
  });

  it("navigates to / when the icon is clicked", () => {
    cy.get('[data-cy="back-to-home"]').click();
    cy.location("pathname").should("eq", "/");
  });

  it("navigates to / when the text link is clicked", () => {
    cy.contains('a[href="/"]', "Back to Home").click();
    cy.location("pathname").should("eq", "/");
  });
});

describe("BackToHome on Register page", () => {
  beforeEach(() => {
    cy.visitRegister();
    cy.location("pathname").should("eq", "/register");
  });

  it("renders the icon button with correct attributes", () => {
    cy.get('[data-cy="back-to-home"]')
      .as("backIcon")
      .should("exist")
      .and("have.attr", "href", "/")
      .and("have.attr", "aria-label", "Back to Home");
  });

  it("renders the text link pointing to /", () => {
    cy.contains('a[href="/"]', "Back to Home").should("exist");
  });

  it("navigates to / when the icon is clicked", () => {
    cy.get('[data-cy="back-to-home"]').click();
    cy.location("pathname").should("eq", "/");
  });

  it("navigates to / when the text link is clicked", () => {
    cy.contains('a[href="/"]', "Back to Home").click();
    cy.location("pathname").should("eq", "/");
  });
});

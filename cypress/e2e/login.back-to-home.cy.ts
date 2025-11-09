describe("Login → Back to Home", () => {
  beforeEach(() => {
    cy.openLoginFromHome();
  });

  it("IconButton goes Home", () => {
    // Target IconButton because
    cy.findByLabelText(/back to home/i).click();
    cy.location("pathname").should("eq", "/");
  });

  it("Text link goes Home", () => {
    // Target the MUI text link
    cy.findByText(/^back to home$/i, { selector: "a" }).click();
    cy.location("pathname").should("eq", "/");
  });
});

describe("Root layout", () => {
  it('sets lang="en" on html element', () => {
    cy.visitHome();
    cy.get("html").should("have.attr", "lang", "en");
  });

  it("uses the app metadata for title and description", () => {
    cy.request("/").then((resp) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(resp.body, "text/html");

      const title = doc.querySelector("title")?.textContent;
      const desc = doc
        .querySelector('meta[name="description"]')
        ?.getAttribute("content");

      expect(title).to.equal("GymScry App");
      expect(desc).to.equal("Future Fitness App");
    });
  });
});

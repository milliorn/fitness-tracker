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

  it("includes favicon and viewport meta", () => {
    cy.request("/").then((resp) => {
      const doc = new DOMParser().parseFromString(resp.body, "text/html");

      const favicon = doc.querySelector('link[rel="icon"]');
      const viewport = doc.querySelector('meta[name="viewport"]');

      expect(favicon, "favicon link tag").to.not.equal(null);
      expect(viewport, "viewport meta tag").to.not.equal(null);
    });
  });

  it("renders the root <main> wrapper correctly", () => {
    cy.visitHome();
    cy.get("main").should("exist");
  });
});

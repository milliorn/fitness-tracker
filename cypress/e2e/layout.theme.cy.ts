describe("Root layout", () => {
  const homepage = "/";

  it('sets lang="en" on html element', () => {
    cy.visitHome();
    cy.get("html").should("have.attr", "lang", "en");
  });

  it("uses the app metadata for title and description", () => {
    cy.request(homepage).then((resp) => {
      const doc = new DOMParser().parseFromString(resp.body, "text/html");

      expect(doc.querySelector("title")?.textContent).to.equal("GymScry App");
      expect(
        doc.querySelector('meta[name="description"]')?.getAttribute("content"),
      ).to.equal("Future Fitness App");
    });
  });

  it("includes favicon and viewport meta", () => {
    cy.request(homepage).then((resp) => {
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

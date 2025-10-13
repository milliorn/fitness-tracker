describe("Assets", () => {
  it("serves monolith.webp with 200 and image MIME", () => {
    cy.request("/monolith.webp").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.headers["content-type"]).to.include("image");
    });
  });
});

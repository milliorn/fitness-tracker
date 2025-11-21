describe("PWA manifest", () => {
  it("is served and has the expected shape", () => {
    cy.request("/manifest.webmanifest").then((resp) => {
      expect(resp.status).to.eq(200);

      expect(resp.headers["content-type"]).to.include("json");

      const manifest = resp.body as {
        background_color?: string;
        description?: string;
        display?: string;
        icons?: { src: string; sizes?: string; type?: string }[];
        name?: string;
        short_name?: string;
        start_url?: string;
        theme_color?: string;
      };

      expect(manifest.background_color).to.eq("#000000");
      expect(manifest.description).to.eq("Future Fitness App");
      expect(manifest.display).to.eq("standalone");
      expect(manifest.name).to.eq("GymScry App");
      expect(manifest.short_name).to.eq("GymScry");
      expect(manifest.start_url).to.eq("/");
      expect(manifest.theme_color).to.eq("#1976d2");

      expect(manifest.icons, "icons array").to.be.an("array");

      expect(manifest.icons!.length, "has at least one icon").to.be.greaterThan(
        0
      );

      const firstIcon = manifest.icons![0];
      expect(firstIcon.src).to.eq("/favicon.ico");
      expect(firstIcon.type).to.eq("image/x-icon");
    });
  });

  it("serves actual icon files from the manifest", () => {
    cy.request("/manifest.webmanifest").then((resp) => {
      const manifest = resp.body as { icons?: { src: string }[] };
      const icons = manifest.icons ?? [];

      icons.slice(0, 2).forEach((icon) => {
        cy.request(icon.src).its("status").should("eq", 200);
      });
    });
  });
});

describe("Contoh Test Cypress", () => {
  it("Harus membuka halaman utama dan cek judul", () => {
    cy.visit("/");
    cy.title().should("include", "Script Labs");
  });

  it("Harus menemukan elemen utama", () => {
    cy.visit("/");
    cy.get("h1").should("be.visible");
  });
});

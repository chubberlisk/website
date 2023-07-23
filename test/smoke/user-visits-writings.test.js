describe("User visits writings page", function () {
  it("displays all writings", function () {
    whenIVisitTheWritingsPage();

    thenISeeThePageTitle();
    andISeeAllWritings();
  });

  function whenIVisitTheWritingsPage() {
    cy.visit("/writings");
  }

  function thenISeeThePageTitle() {
    cy.title().should("eq", "Writings - Wen Ting Wang");
  }

  function andISeeAllWritings() {
    cy.contains("Writings").should("be.visible");
  }
});

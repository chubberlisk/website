describe("User visits paintings page", function () {
  it("displays all paintings", function () {
    whenIVisitThePaintingsPage();

    thenISeeThePageTitle();
    andISeeAllPaintings();
  });

  function whenIVisitThePaintingsPage() {
    cy.visit("/paintings");
  }

  function thenISeeThePageTitle() {
    cy.title().should("eq", "Paintings - Wen Ting Wang");
  }

  function andISeeAllPaintings() {
    cy.contains("Paintings").should("be.visible");
  }
});

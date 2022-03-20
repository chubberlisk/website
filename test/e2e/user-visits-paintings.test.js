describe("User visits paintings page", function () {
  it("displays all paintings", function () {
    whenIVisitTheBlogPage();

    thenISeeThePageTitle();
    andISeeAllPaintings();
  });

  function whenIVisitTheBlogPage() {
    cy.visit("/blog");
  }

  function thenISeeThePageTitle() {
    cy.title().should("eq", "Paintings - Wen Ting Wang");
  }

  function andISeeAllPaintings() {
    cy.contains("Paintings").should("be.visible");
  }
});

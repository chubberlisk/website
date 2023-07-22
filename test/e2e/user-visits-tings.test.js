describe("User visits Tings page", function () {
  it("displays all Tings", function () {
    whenIVisitTheTingsPage();

    thenISeeThePageTitle();
    andISeeAllTings();
  });

  function whenIVisitTheTingsPage() {
    cy.visit("/tings");
  }

  function thenISeeThePageTitle() {
    cy.title().should("eq", "Tings - Wen Ting Wang");
  }

  function andISeeAllTings() {
    cy.contains("All Ting posts").should("be.visible");
  }
});

describe("User visits not found page", function () {
  it("displays the 404 page", function () {
    whenIVisitAPageThatDoesNotExist();

    thenISeeTheNotFoundPage();
  });

  function whenIVisitAPageThatDoesNotExist() {
    cy.visit("/foo", { failOnStatusCode: false });
  }

  function thenISeeTheNotFoundPage() {
    cy.title().should("contains", "Page not found");
  }
});

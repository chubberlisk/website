describe("User visits home page", function() {
  it("welcomes the user", function() {
    whenIVisitTheHomePage()

    thenISeeThePageTitle()
    andISeeTheWelcomeText()
  })

  function whenIVisitTheHomePage() {
    cy.visit("/")
  }

  function thenISeeThePageTitle() {
    cy.title().should('eq', 'Wen Ting Wang')
  }

  function andISeeTheWelcomeText() {
    cy.contains("Welcome!")
  }
})

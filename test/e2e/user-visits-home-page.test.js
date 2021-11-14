describe("User visits home page", function () {
  it("welcomes the user", function () {
    whenIVisitTheHomePage();

    thenISeeThePageTitle();
    andISeeTheWelcomeText();
    andISeeTheSlogan();
    andISeeTheGitHubLink();
    andISeeTheLinkedInLink();
    andISeeAFooter();
  });

  function whenIVisitTheHomePage() {
    cy.visit("/");
  }

  function thenISeeThePageTitle() {
    cy.title().should("eq", "Wen Ting Wang");
  }

  function andISeeTheWelcomeText() {
    cy.contains("Hi there!");
  }

  function andISeeTheSlogan() {
    cy.get("section#contact-me").contains(/Let's develop Tings together./);
  }

  function andISeeTheGitHubLink() {
    cy.contains("GitHub")
      .should("have.attr", "href")
      .and("include", "https://github.com/chubberlisk");
  }

  function andISeeTheLinkedInLink() {
    cy.contains("LinkedIn")
      .should("have.attr", "href")
      .and("include", "https://www.linkedin.com/in/wen-ting-wang");
  }

  function andISeeAFooter() {
    cy.get("footer").should("include.text", "Copyright: Wen Ting Wang");
  }
});

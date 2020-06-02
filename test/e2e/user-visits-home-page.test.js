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
    cy.get("section#contact-me li:nth-child(1) a")
      .should("have.attr", "href")
      .and("include", "https://github.com/chubberlisk");
  }

  function andISeeTheLinkedInLink() {
    cy.get("section#contact-me li:nth-child(2) a")
      .should("have.attr", "href")
      .and("include", "https://www.linkedin.com/in/wen-ting-wang");
  }

  function andISeeAFooter() {
    cy.get("footer").should("include.text", "© 2020 Copyright: Wen Ting Wang");
  }
});

describe("User visits blog page", function () {
  it("displays all blog posts", function () {
    whenIVisitTheBlogPage();

    thenISeeThePageTitle();
    andISeeAllBlogPosts();
  });

  function whenIVisitTheBlogPage() {
    cy.visit("/blog");
  }

  function thenISeeThePageTitle() {
    cy.title().should("eq", "Blog - Wen Ting Wang");
  }

  function andISeeAllBlogPosts() {
    cy.contains("All blog posts").should("be.visible");
  }
});

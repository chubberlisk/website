describe("User gets Ting puns API endpoint", function () {
  it("returns a list of Ting puns", function () {
    cy.request("GET", "/api/ting-puns").then(({ body }) => {
      expect(body["data"]["ting-puns"].length).to.greaterThan(1);
    });
  });
});

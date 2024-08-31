describe("User gets Ting puns API endpoint", function () {
  it("returns a list of Ting puns", function () {
    cy.request("GET", "/api/ting-puns").then(({ body }) => {
      expect(body["data"]["tingPuns"].length).to.greaterThan(1);
    });
  });
});

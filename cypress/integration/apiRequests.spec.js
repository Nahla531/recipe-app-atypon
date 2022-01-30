/* eslint-disable no-undef */
/* eslint-disable jest/valid-title */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/// <reference types="cypress" />
describe("gets data back from api", () => {
  it("retrive first five recipes", async () => {
    // eslint-disable-next-line jest/valid-expect-in-promise
    //making get request to the api and make sure it get back with results
    cy.request(
      "GET",
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=d7b87761a7184c809a4cb5f577ad6d5a&query=chicken&number=5"
    ).then((response) => {
      // eslint-disable-next-line jest/valid-expect
      expect(response).to.have.property("status", 200);
      // eslint-disable-next-line no-unused-expressions
      expect(response.body).to.not.be.null;
      expect(response.body.results).to.have.length(5);
    });
  });
  // retrive one recipe
  it("retrive one recipe ", () => {
    cy.request(
      "GET",
      "https://api.spoonacular.com/recipes/637876/information?apiKey=d7b87761a7184c809a4cb5f577ad6d5a"
    ).then((response) => {
      // eslint-disable-next-line jest/valid-expect
      expect(response).to.have.property("status", 200);
      // eslint-disable-next-line no-unused-expressions
      expect(response.body).to.not.be.null;
    });
  });
});

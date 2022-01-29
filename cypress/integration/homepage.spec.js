/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("homepage test", () => {
  it("renders corretly", () => {
    cy.visit("/");
    cy.get(".main-container__search").should("exist");
  });
  it("button Clickable", () => {
    // Get an input, type into it and verify that the value has been updated
    cy.get(".search-input").type("chicken").should("have.value", "chicken");
    //click the button
    cy.get(".btn").click();
    //making sure that there is a result back
    cy.get(".recipeCol").should("exist");
    // trying to find specific recipe name and click on it
    cy.contains("Chicken 65").click();
    //making sure after clicking gets the right url
    cy.url().should("include", "/recipe/637876");

    // checking no results found
    cy.visit("/");
    cy.get(".search-input").type("bdbd").should("have.value", "bdbd");
    cy.get(".btn").click();
    cy.contains("No Results Found");
    //trying to test responsive design working on it still ..
    cy.viewport(550, 750);
  });
});

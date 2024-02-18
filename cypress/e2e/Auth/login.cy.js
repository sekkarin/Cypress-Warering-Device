//<reference types="cypress" />
const BASE_URL = "http://localhost:5173";
describe("Login", () => {
//   it("login to webpage success fully", () => {
//     cy.visit(BASE_URL);
//     cy.get("#open-big-login-drawer").click();
//     // cy.contains("Sign In").click();
//     cy.get("div:nth-child(1) > .relative > #username").type("ken");
//     cy.get("div:nth-child(1) > .relative > #password").type("Password123");
//     cy.get("div:nth-child(1) > #setup-user-submit").click();
//     // cy.get("h1").should("contain", "Overview");

//   });
  it("Login to fail when password is incorrect", () => {
    cy.visit(BASE_URL);
    cy.contains("Sign In").click();
    cy.get("div:nth-child(1) > .relative > #username").type("ken");
    cy.get("div:nth-child(1) > .relative > #password").type("password_123");
    cy.get("div:nth-child(1) > #setup-user-submit").click();
    cy.contains("Password is incorrect").should("exist");
  });
  it("Login to fail when password is not long", () => {
    cy.visit(BASE_URL);
    cy.contains("Sign In").click();
    cy.get("div:nth-child(1) > .relative > #username").type("ken");
    cy.get("div:nth-child(1) > .relative > #password").type("pass");
    cy.get("div:nth-child(1) > #setup-user-submit").click();
    cy.contains("password must be longer than or equal to 8 characters").should(
      "exist"
    );
  });
  it("Login to fail when username is not long", () => {
    cy.visit(BASE_URL);
    cy.contains("Sign In").click();
    cy.get("div:nth-child(1) > .relative > #username").type("k");
    cy.get("div:nth-child(1) > .relative > #password").type("pass");
    cy.get("div:nth-child(1) > #setup-user-submit").click();
    cy.contains("username must be longer than or equal to 3 characters").should(
      "exist"
    );
  });
  it("Login to fail no have a username", () => {
    cy.visit(BASE_URL);
    cy.contains("Sign In").click();

    cy.get("div:nth-child(1) > .relative > #password").type("pass");
    cy.get("div:nth-child(1) > #setup-user-submit").click();
    cy.contains("Please provide all value").should("exist");
  });
  it("Login to fail no have a password", () => {
    cy.visit(BASE_URL);
    cy.contains("Sign In").click();
    cy.get("div:nth-child(1) > .relative > #username").type("ken");
    // cy.get("div:nth-child(1) > .relative > #password").type("pass");
    cy.get("div:nth-child(1) > #setup-user-submit").click();
    cy.contains("Please provide all value").should("exist");
  });
  
  it("Login to fail not math username", () => {
    cy.visit(BASE_URL);
    cy.contains("Sign In").click();
    cy.get("div:nth-child(1) > .relative > #username").type("ken0@#413212321");
    cy.get("div:nth-child(1) > .relative > #password").type("pass");
    cy.get("div:nth-child(1) > #setup-user-submit").click();
    cy.contains(`username must match`).should("exist");
  });
});

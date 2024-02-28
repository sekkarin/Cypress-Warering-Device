///<reference types="cypress" />
import { user1 } from "../../fixtures/User.json";

const BASE_URL = "http://localhost:5173";
describe("Login", () => {
  it("login to webpage success fully", () => {
    cy.visit(BASE_URL);
    cy.get("#open-big-login-drawer").click();
    cy.get("div:nth-child(1) > .relative > #username").type("boat");
    cy.get("div:nth-child(1) > .relative > #password").type("19092545Boat");
    cy.get("div:nth-child(1) > #setup-user-submit").click();
    // cy.get("h1").should("contain", "Overview");
    cy.screenshot();

  });
  it("Login to fail when password is incorrect", () => {
    cy.visit(BASE_URL);
    cy.contains("Sign In").click();
    cy.get("div:nth-child(1) > .relative > #username").type(`${user1.username}`);
    cy.get("div:nth-child(1) > .relative > #password").type(`Password123456`);
    cy.get("div:nth-child(1) > #setup-user-submit").click();
    cy.contains("Please verify your e-mail first").should("exist");
    // cy.contains("Password is incorrect").should("exist");
    cy.screenshot();
  });

  // รีรหัสผ่าน
  it("Login to fail when password is incorrect to reset password",()=>{
    cy.visit(BASE_URL);
    cy.contains("Sign In").click();
    cy.get("div:nth-child(1) > .relative > #username").type(`${user1.username}`);
    cy.get("div:nth-child(1) > .relative > #password").type(`fkfkfkfk`);
    cy.get("div:nth-child(1) > #setup-user-submit").click();
    cy.get("div:nth-child(1) > .flex #forget-pass-btn").click();
    cy.get("#email_forget_password").type(`${user1.email}`);
    // cy.get("forget-pass-submit").click();

  })

  it("Login to fail when password is not long", () => {
    cy.visit(BASE_URL);
    cy.contains("Sign In").click();
    cy.get("div:nth-child(1) > .relative > #username").type(`${user1.firstName}`);
    cy.get("div:nth-child(1) > .relative > #password").type("pass");
    cy.get("div:nth-child(1) > #setup-user-submit").click();
    cy.contains("password must be longer than or equal to 8 characters").should(
      "exist"
    );
    cy.screenshot();
  });
  it("Login to fail no have a username", () => {
      cy.visit(BASE_URL);
      cy.contains("Sign In").click();
    
      cy.get("div:nth-child(1) > .relative > #password").type(`${user1.password}`);
      cy.get("div:nth-child(1) > #setup-user-submit").click();
      cy.contains("Please provide all value").should("exist");
      cy.screenshot();
    });
    it("Login to fail no have a password", () => {
        cy.visit(BASE_URL);
        cy.contains("Sign In").click();
        cy.get("div:nth-child(1) > .relative > #username").type(`${user1.firstName}`);
        cy.get("div:nth-child(1) > #setup-user-submit").click();
        cy.contains("Please provide all value").should("exist");
        cy.screenshot();
      });
      
  it("Login to fail not math username", () => {
      cy.visit(BASE_URL);
    cy.contains("Sign In").click();
    cy.get("div:nth-child(1) > .relative > #username").type("Username0@#413212321");
    cy.get("div:nth-child(1) > .relative > #password").type("pass");
    cy.get("div:nth-child(1) > #setup-user-submit").click();
    cy.contains(`username must match`).should("exist");
    cy.screenshot();
  });
});

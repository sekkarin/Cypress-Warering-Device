///<reference types="cypress" />
import { user1 } from "../../fixtures/User.json";

const BASE_URL = "http://localhost:5173/home";
describe("Login", () => {

  it("TC2001 login to webpage successfully", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get("#username").type("boat");
    cy.get("#password").type("19092545Boat");
    cy.get("#setup-user-drawer-submit").click();
    cy.contains("Overview").should("exist");
    cy.screenshot();
  });

  it("TC2002 Login to fail when not verify email", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get(" #username").type(user1.username);
    cy.get(" #password").type(user1.password);
    
    cy.get("#setup-user-drawer-submit").click();
    cy.contains("Please verify your e-mail first").should("exist");
    
    cy.screenshot();
  });

  it("TC2003 Login to fail when password is incorrect", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get(" #username").type(`boat`);
    cy.get(" #password").type(`fkfkfkfk`);
  
    cy.get("#setup-user-drawer-submit").click();
    cy.contains("Password is incorrect").should("exist");
    cy.screenshot();
  });

  it("TC2004 Login to fail when password is not long", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get(" #username").type("usertest1");
    cy.get(" #password").type("pass");
  
    cy.wait(2000);
    cy.get("#setup-user-drawer-submit").click();
    cy.contains("password must be longer than or equal to 8 characters").should(
      "exist"
    );
    cy.screenshot();
  });

  it("TC2005 Login to fail no have a username", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();

    cy.get(" #password").type(`${user1.password}`);
  
    cy.get("#setup-user-drawer-submit").click();
    cy.contains("Username is required").should("exist");
    cy.screenshot();
  });

  it("TC2006 Login to fail no have a password", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get(" #username").type(`${user1.username}`);
    cy.get("#setup-user-drawer-submit").click();
    cy.contains("Password is required").should("exist");
    cy.screenshot();
  });

  it("TC2007 Login to fail not math username", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get(" #username").type("Username0@#413212321");
    cy.get(" #password").type("password");
    cy.get("#setup-user-drawer-submit").click();
    cy.contains(`username must match`).should("exist");
    cy.screenshot();
  });

  it("TC2008 Login to fail not have user", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get(" #username").type("Username0");
    cy.get(" #password").type("password");
    cy.get("#setup-user-drawer-submit").click();
    cy.contains(`not found user`).should("exist");
    cy.screenshot();
  });

  
});

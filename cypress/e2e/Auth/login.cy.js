///<reference types="cypress" />
import { user1 } from "../../fixtures/User.json";

const BASE_URL = "http://localhost:5173/home";
describe("Login", () => {
  // it("TC2001 login to webpage successfully", () => {
  //   cy.visit(BASE_URL);
  //   cy.get("#toggle-big-login-landing-drawer-btn").click();
  //   // cy.get("#username").click();
  //   cy.get("#username").type("boat");
  //   cy.get("#password").type("19092545Boat");
  //   // cy.get('#password').type("19092545Boat")
  //   // cy.get("#remember-user-drawer-checkbox").click();
  //   cy.get("#setup-user-drawer-submit").click();
  //   cy.contains("Overview").should("exist");
  //   // cy.get("h1").should("contain", "Overview");
  //   cy.screenshot();

  // });
  it("TC2002 Login to fail when not verify email", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get(" #username").type("boat");
    cy.get(" #password").type(`19092545Boat`);
  // cy.get("#remember-user-drawer-checkbox").click();
  cy.get("#setup-user-drawer-submit").click();
    cy.contains("Please verify your e-mail first").should("exist");
    // cy.contains("Password is incorrect").should("exist");
    cy.screenshot();
  });
  
  // it("TC2003 Login to fail when password is incorrect", () => {
  //   cy.visit(BASE_URL);
  //   cy.get("#toggle-big-login-landing-drawer-btn").click();
  //   cy.get(" #username").type(`ken`);
  //   cy.get(" #password").type(`fkfkfkfk`);
  // // cy.get("#remember-user-drawer-checkbox").click();
  // cy.get("#setup-user-drawer-submit").click();
  //   cy.contains("Password is incorrect").should("exist");
  //   cy.screenshot();
  // });

  
  // it("TC2004 Login to fail when password is not long", () => {
  //   cy.visit(BASE_URL);
  //   cy.get("#toggle-big-login-landing-drawer-btn").click();
  //   cy.get(" #username").type(`${user1.firstName}`);
  //   cy.get(" #password").type("pass");
  // // cy.get("#remember-user-drawer-checkbox").click();
  // cy.wait(2000)
  // cy.get("#setup-user-drawer-submit").click();
  //   cy.contains("password must be longer than or equal to 8 characters").should(
  //     "exist"
  //     );
  //     cy.screenshot();
  //   });
    
  // it("TC2005 Login to fail no have a username", () => {
  //     cy.visit(BASE_URL);
  //     cy.get("#toggle-big-login-landing-drawer-btn").click();
      
  //     cy.get(" #password").type(`${user1.password}`);
  // // cy.get("#remember-user-drawer-checkbox").click();
  // cy.get("#setup-user-drawer-submit").click();
  //     cy.contains("Please provide all value").should("exist");
  //     cy.screenshot();
  //   });
    
  // it("TC2006 Login to fail no have a password", () => {
  //     cy.visit(BASE_URL);
  //     cy.get("#toggle-big-login-landing-drawer-btn").click();
  //     cy.get(" #username").type(`${user1.username}`);
  //         // cy.get("#remember-user-drawer-checkbox").click();
  //   cy.get("#setup-user-drawer-submit").click();
  //       cy.contains("Please provide all value").should("exist");
  //       cy.screenshot();
  //     });
      
  // it("TC2007 Login to fail not math username", () => {
  //       cy.visit(BASE_URL);
  //       cy.get("#toggle-big-login-landing-drawer-btn").click();
  //       cy.get(" #username").type("Username0@#413212321");
  //       cy.get(" #password").type("pass");
  //       //  cy.get("#remember-user-drawer-checkbox").click();
  //       cy.get("#setup-user-drawer-submit").click();
  //       cy.contains(`username must match`).should("exist");
  //       cy.screenshot();
  //     });

      // // รีรหัสผ่าน
      // it("Login to fail when password is incorrect to reset password",()=>{
      //   cy.visit(BASE_URL);
      //   cy.contains("Sign In").click();
      //   cy.get("div:nth-child(1) > .relative > #username").type(`${user1.username}`);
      //   cy.get("div:nth-child(1) > .relative > #password").type(`fkfkfkfk`);
      //   cy.get("div:nth-child(1) > #setup-user-submit").click();
      //   cy.get("div:nth-child(1) > .flex #forget-pass-btn").click();
      //   cy.get("#email_forget_password").type(`${user1.email}`);
      //   // cy.get("forget-pass-submit").click();
    
      // })
    });
    
///<reference types="cypress" />
import { user1 } from "../../fixtures/User.json";

const BASE_URL = "http://localhost:5173/home";
describe("Login", () => {
  // {
  //   "_id": {
  //     "$oid": "66e3bda018e1a3bf3f64ad6c"
  //   },
  //   "firstName": "Sekkarin",
  //   "lastName": "Singhayoo",
  //   "username": "Sekkarin",
  //   "password": "$2b$10$bmVQccx5yAyCA6U6mi0I5eCQh9jZ9Gad1lCJwGO.Qr.tz3XEnRkwC",
  //   "email": "sekkarin.s@gmail.com",
  //   "roles": [
  //     "user"
  //   ],
  //   "isActive": true,
  //   "verifired": true,
  //   "createdAt": {
  //     "$date": "2024-09-13T04:20:48.808Z"
  //   },
  //   "updatedAt": {
  //     "$date": "2024-09-25T05:52:36.819Z"
  //   },
  //   "__v": 0,
  //   "profileUrl": "https://warering-project.s3.ap-southeast-1.amazonaws.com/1727243556392-1727243556344_wallpaper.png"
  // }

  it("TC2001 login to webpage successfully", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get("#username").type("AdminWareringCaxknsa");
    cy.get("#password").type("kmsad9ASdjas0LSJWd9iaa");
    cy.get("#setup-user-drawer-submit").click();
    cy.contains("Overview").should("exist");
    cy.screenshot();
  });
  it("TC2002 Login to fail when not verify email", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get(" #username").type(user1.username);
    cy.get(" #password").type(user1.password);
    // cy.get("#remember-user-drawer-checkbox").click();
    cy.get("#setup-user-drawer-submit").click();
    cy.contains("Please verify your e-mail first").should("exist");
    // cy.contains("Password is incorrect").should("exist");
    cy.screenshot();
  });

  it("TC2003 Login to fail when password is incorrect", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get(" #username").type(`AdminWareringCaxknsa`);
    cy.get(" #password").type(`fkfkfkfk`);
    // cy.get("#remember-user-drawer-checkbox").click();
    cy.get("#setup-user-drawer-submit").click();
    cy.contains("Password is incorrect").should("exist");
    cy.screenshot();
  });

  it("TC2004 Login to fail when password is not long", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get(" #username").type("usertest1");
    cy.get(" #password").type("pass");
    // cy.get("#remember-user-drawer-checkbox").click();
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
    // cy.get("#remember-user-drawer-checkbox").click();
    cy.get("#setup-user-drawer-submit").click();
    cy.contains("Please provide all value").should("exist");
    cy.screenshot();
  });

  it("TC2006 Login to fail no have a password", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get(" #username").type(`${user1.username}`);
    // cy.get("#remember-user-drawer-checkbox").click();
    cy.get("#setup-user-drawer-submit").click();
    cy.contains("Please provide all value").should("exist");
    cy.screenshot();
  });

  it("TC2007 Login to fail not math username", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get(" #username").type("Username0@#413212321");
    cy.get(" #password").type("password");
    //  cy.get("#remember-user-drawer-checkbox").click();
    cy.get("#setup-user-drawer-submit").click();
    cy.contains(`username must match`).should("exist");
    cy.screenshot();
  });

  it("TC2008 Login to fail not have user", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-login-landing-drawer-btn").click();
    cy.get(" #username").type("Username0");
    cy.get(" #password").type("password");
    //  cy.get("#remember-user-drawer-checkbox").click();
    cy.get("#setup-user-drawer-submit").click();
    cy.contains(`not found user`).should("exist");
    cy.screenshot();
  });

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

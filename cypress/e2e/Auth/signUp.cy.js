const BASE_URL = "";
import { user1 } from "../../fixtures/User.json";
describe("SignUp", () => {
  // signUp Success fully
  it("TC1001 sigh up to webpage success fully", function () {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-register-landing-drawer-btn").click();
    cy.get(" #username").type(`${user1.username}`);
    cy.get(" #firstName").type(`${user1.firstName}`);
    cy.get(" #lastName").type(`${user1.lastName}`);
    cy.get(" #email").type(`emailTest${new Date().getSeconds()}@test.com`);
    cy.get(" #password").type(`${user1.password}`);
    cy.get(" #confirm_password").type(`${user1.confirmPassword}`);
    cy.get("#agree-term-and-conditions-drawer-checkbox").click();
    cy.get("#setup-user-drawer-submit").click();
    cy.contains("Creating your account...").should("exist");

    cy.screenshot();
  });

  // signUp fail All
  // ชื่อ user ซ้ำ
  it("TC1002 sigh up to fail username to used", () => {
    cy.visit(BASE_URL);

    cy.get("#toggle-big-register-landing-drawer-btn").click();
    cy.get(" #username").type(`${user1.username}`);
    cy.get(" #firstName").type(`${user1.firstName}`);
    cy.get(" #lastName").type(`${user1.lastName}`);
    cy.get(" #email").type(`${user1.email}`);
    cy.get(" #password").type(`${user1.password}`);
    cy.get(" #confirm_password").type(`${user1.confirmPassword}`);

    cy.get("#agree-term-and-conditions-drawer-checkbox").click();
    // cy.wait(15000)
    cy.get("#setup-user-drawer-submit").click();

    cy.contains("username has been used").should("exist");
    cy.screenshot();
  });

  // // // รหัสผ่านง่ายเกินไป
  it("TC1003 sign Up to fail password not match so Ez ", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-register-landing-drawer-btn").click();
    cy.get(" #username").type(`${user1.username}`);
    cy.get(" #firstName").type(`${user1.firstName}`);
    cy.get(" #lastName").type(`${user1.lastName}`);
    cy.get(" #email").type(`${user1.email}`);
    cy.get(" #password").type("passEz");
    cy.get(" #confirm_password").type("passEz");

    cy.get("#agree-term-and-conditions-drawer-checkbox").click();
    // cy.wait(15000)
    cy.get("#setup-user-drawer-submit").click();

    cy.contains("password too weak").should("exist");
    cy.screenshot();
  });

  // // // ชื่อผู้ใช้ เกิน 50  ตัว
  it("TC1004 sign up to fail username not match pattern and over 30 characters", () => {
    cy.visit(BASE_URL);
    cy.get(`#toggle-big-register-landing-drawer-btn`).click();
    cy.get(" #username").type(
      `username212345678901234567890123456789012345678901234567890`
    );
    cy.get(" #firstName").type("firstName");
    cy.get(" #lastName").type("lastName");
    cy.get(" #email").type(`emailTest${new Date().getSeconds()}@test.com`);
    cy.get(" #password").type(`Passwrod1234`);
    cy.get(" #confirm_password").type(`Passwrod1234`);

    cy.get("#agree-term-and-conditions-drawer-checkbox").click();
    // cy.wait(15000)
    cy.get("#setup-user-drawer-submit").click();

    cy.contains(
      "username must be shorter than or equal to 30 characters"
    ).should("exist");
    cy.screenshot();
  });
  // // // ชื่อผู้ใช้ไม่ตรงกับรูปแบบ
  it("TC1005 sign up to fail username not match pattern", () => {
    cy.visit(BASE_URL);

    cy.get(`#toggle-big-register-landing-drawer-btn`).click();
    cy.get(" #username").type("usernameTest*$%^&**--+-*");
    cy.get(" #firstName").type("firstName");
    cy.get(" #lastName").type("lastName");
    cy.get(" #email").type(`emailTest${new Date().getSeconds()}@test.com`);
    cy.get(" #password").type(`Password1234`);
    cy.get(" #confirm_password").type(`Password1234`);

    cy.get("#agree-term-and-conditions-drawer-checkbox").click();
    // cy.wait(15000)
    cy.get("#setup-user-drawer-submit").click();

    cy.contains(`username must match`).should("exist");
    cy.screenshot();
  });

  // // password กับ confirmPassword ไม่ตรงกัน
  it("TC1006 sign up to fail password not match", () => {
    cy.visit(BASE_URL);

    cy.get("#toggle-big-register-landing-drawer-btn").click();
    cy.get(" #username").type(`usernameTest`);
    cy.get(" #firstName").type("firstName");
    cy.get(" #lastName").type("lastName");
    cy.get(" #email").type(`emailTest${new Date().getSeconds()}@test.com`);
    cy.get(" #password").type("Password1234");
    cy.get(" #confirm_password").type(`Password123433`);

    cy.get("#agree-term-and-conditions-drawer-checkbox").click();
    // cy.wait(10000)
    cy.get("#setup-user-drawer-submit").click();

    cy.contains("Confirm password should be the same password").should("exist");
    cy.screenshot();
  });
});

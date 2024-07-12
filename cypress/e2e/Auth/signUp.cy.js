const BASE_URL = "http://warering.online/";
import { user1 } from "../../fixtures/User.json";
  describe("SignUp", () => {
  // signUp Success fully
  it("sigh up to webpage success fully", function () {
    cy.visit(BASE_URL);
    // expect(this.inboxId).exist;
    // expect(this.emailAddress).contains("@gmail");
    cy.get("#toggle-big-register-landing-drawer-btn").click();
    cy.get("#username").type(
      `userName${new Date().getSeconds()}`
    );
    cy.get(" #firstName").type(
      `${user1.firstName}`
    );
    cy.get(" #lastName").type(
      `${user1.lastName}`
    );
    cy.get(" #email").type(
      `emailTest${new Date().getSeconds()}@test.com`
      // "usermailtest77@gmail.com"
      // this.emailAddress
    );
    cy.get(" #password").type(
      `${user1.password}`
    );
    cy.get(" #confirm_password").type(
      `${user1.confirmPassword}`
    );
    cy.get("#agree-term-and-conditions-drawer-checkbox").click();
    cy.wait(2000);
    cy.get("#setup-user-drawer-submit").click();
    cy.contains("Creating your account...").should("exist");
    cy.wait(3000);
    // cy.contains("Created your account and Please verify your email").should(
    //   "exist"
    // );
    cy.screenshot();
  });

  // signUp fail All
  // ชื่อ user ซ้ำ
  it("sigh up to fail username to used", () => {
    cy.visit(BASE_URL);

    cy.get("#toggle-big-register-landing-drawer-btn").click();
    cy.get(" #username").type(
      `${user1.username}`
    );
    cy.get(" #firstName").type(
      `${user1.firstName}`
    );
    cy.get(" #lastName").type(
      `${user1.lastName}`
    );
    cy.get(" #email").type(`${user1.email}`);
    cy.get(" #password").type(
      `${user1.password}`
    );
    cy.get(" #confirm_password").type(
      `${user1.confirmPassword}`
    );

    cy.get("#agree-term-and-conditions-drawer-checkbox").click();
    cy.wait(10000)
    cy.get("#setup-user-drawer-submit").click();

    cy.contains("username has been used").should("exist");
    cy.screenshot();
  });

  // // // รหัสผ่านง่ายเกินไป
  it("sign Up to fail password not match so Ez ", () => {
    cy.visit(BASE_URL);
    cy.get("#toggle-big-register-landing-drawer-btn").click();
    cy.get(" #username").type(
      `${user1.username}`
    );
    cy.get(" #firstName").type(
      `${user1.firstName}`
    );
    cy.get(" #lastName").type(
      `${user1.lastName}`
    );
    cy.get(" #email").type(`${user1.email}`);
    cy.get(" #password").type("passEz");
    cy.get(" #confirm_password").type("passEz");

    cy.get("#agree-term-and-conditions-drawer-checkbox").click();
    cy.wait(10000)
    cy.get("#setup-user-drawer-submit").click();

    cy.contains("password too weak").should("exist");
    cy.screenshot();
  });

  // // // ชื่อผู้ใช้ เกิน 50  ตัว
  it("sign up to fail username not match pattern and over 50 characters", () => {
    cy.visit(BASE_URL);
    cy.get(`#toggle-big-register-landing-drawer-btn`).click();
    cy.get(" #username").type(
      `username212345678901234567890123456789012345678901234567890`
    );
    cy.get(" #firstName").type("firstName");
    cy.get(" #lastName").type("lastName");
    cy.get(" #email").type(
      `emailTest${new Date().getSeconds()}@test.com`
    );
    cy.get(" #password").type(`Passwrod1234`);
    cy.get(" #confirm_password").type(
      `Passwrod1234`
    );

    cy.get("#agree-term-and-conditions-drawer-checkbox").click();
    cy.wait(10000)
    cy.get("#setup-user-drawer-submit").click();

    cy.contains(
      "username must be shorter than or equal to 30 characters"
    ).should("exist");
    cy.screenshot();
  });
  // // // ชื่อผู้ใช้ไม่ตรงกับรูปแบบ
  it("sign up to fail username not match pattern", () => {
    cy.visit(BASE_URL);

    cy.get(`#toggle-big-register-landing-drawer-btn`).click();
    cy.get(" #username").type(
      "usernameTest*$%^&**--+-*"
    );
    cy.get(" #firstName").type("firstName");
    cy.get(" #lastName").type("lastName");
    cy.get(" #email").type(
      `emailTest${new Date().getSeconds()}@test.com`
    );
    cy.get(" #password").type(`Passwrod1234`);
    cy.get(" #confirm_password").type(
      `Passwrod1234`
    );

    cy.get("#agree-term-and-conditions-drawer-checkbox").click();
    cy.wait(10000)
    cy.get("#setup-user-drawer-submit").click();

    cy.contains(
      `username must match ^[a-zA-Z0-9\s]+$ regular expression`
    ).should("exist");
    cy.screenshot();
  });
  // // // ชื่อจริงไม่ตรงกับรูปแบบ
  it("sigh up to fail firstName not match pattern", () => {
    cy.visit(BASE_URL);

    cy.get(`#toggle-big-register-landing-drawer-btn`).click();
    cy.get(" #username").type(`usernameTest`);
    cy.get(" #firstName").type(
      "firstName1+=%^^&*$%"
    );
    cy.get(" #lastName").type("lastName");
    cy.get(" #email").type(
      `emailTest${new Date().getSeconds()}@test.com`
    );
    cy.get(" #password").type(`Password1234`);
    cy.get(" #confirm_password").type(
      `Password1234`
    );
    cy.get("#agree-term-and-conditions-drawer-checkbox").click();
    cy.wait(10000)
    cy.get("#setup-user-drawer-submit").click();
    cy.contains(
      "firstName must match ^[a-zA-Z\\s]+$ regular expression"
    ).should("exist");
    cy.screenshot();
  });

  // // password กับ confirmPassword ไม่ตรงกัน
  it("sign up to fail password not match", () => {
    cy.visit(BASE_URL);

    cy.get("#toggle-big-register-landing-drawer-btn").click();
    cy.get(" #username").type(`usernameTest`);
    cy.get(" #firstName").type("firstName");
    cy.get(" #lastName").type("lastName");
    cy.get(" #email").type(
      `emailTest${new Date().getSeconds()}@test.com`
    );
    cy.get(" #password").type(`Passwrod1234`);
    cy.get(" #confirm_password").type(
      `Passwrod123433`
    );

    cy.get("#agree-term-and-conditions-drawer-checkbox").click();
    cy.wait(10000)
    cy.get("#setup-user-drawer-submit").click();

    cy.contains("Confirm password should be the same password").should("exist");
    cy.screenshot();
  });
  
  
  
  
  
  
  
  
  // // // ไมม่ได้กร
  // it("sign up to fail password not match pattern", () => {
  //   cy.visit(BASE_URL);

  //   cy.get(`.border-r-\\[\\#20476b\\]`).click();
  //   cy.get("div:nth-child(1) > .relative > #username").type(`usernameTest`);
  //   cy.get("div:nth-child(1) > .relative > #firstName").type("firstName");
  //   cy.get("div:nth-child(1) > .relative > #lastName").type("lastName");
  //   cy.get("div:nth-child(1) > .relative > #email").type(
  //     `emailTest${new Date().getSeconds()}@test.com`
  //   );
  //   cy.get("div:nth-child(1) > .relative > #password").type(`Passwrod1234`);
  //   cy.get("div:nth-child(1) > .relative > #confirm_password").type(
  //     `Passwrod123433`
  //   );

  //   cy.get("#accept-term-btn").click();
  //   cy.get("div:nth-child(1) > #setup-user-submit").click();

  //   cy.contains("Confirm password should be the same password").should("exist");
  //   cy.screenshot();
  // });

});

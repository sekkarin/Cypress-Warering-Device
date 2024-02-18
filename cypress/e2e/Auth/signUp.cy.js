const BASE_URL = "http://localhost:5173";

describe("SighUp", () => {
  it("sigh up to webpage success fully", () => {

    cy.visit(BASE_URL);

    cy.get(`.border-r-\\[\\#20476b\\]`).click();
    cy.get("div:nth-child(1) > .relative > #username").type(`usernameTest${new Date().getSeconds()}`);
    cy.get("div:nth-child(1) > .relative > #firstName").type("firstName");
    cy.get("div:nth-child(1) > .relative > #lastName").type("lastName");
    cy.get("div:nth-child(1) > .relative > #email").type(`emailTest${new Date().getSeconds()}@test.com`);
    cy.get("div:nth-child(1) > .relative > #password").type(`Password1234`);
    cy.get("div:nth-child(1) > .relative > #confirm_password").type(`Password1234`);

    cy.get("#accept-term-btn").click();
    cy.wait(2000)
    cy.get("div:nth-child(1) > #setup-user-submit").click();

    cy.contains("Creating your account...").should("exist");
    cy.wait(3000)
    cy.contains("Created your account and Please verify your email").should("exist");
    cy.screenshot();
  });
  // it("sigh up to fail username to used", () => {
  //   cy.visit(BASE_URL);

  //   cy.get(`.border-r-\\[\\#20476b\\]`).click();
  //   cy.get("div:nth-child(1) > .relative > #username").type(`ken`);
  //   cy.get("div:nth-child(1) > .relative > #firstName").type("firstName");
  //   cy.get("div:nth-child(1) > .relative > #lastName").type("lastName");
  //   cy.get("div:nth-child(1) > .relative > #email").type(
  //     `emailTest${new Date().getSeconds()}@test.com`
  //   );
  //   cy.get("div:nth-child(1) > .relative > #password").type(`Passwrod1234`);
  //   cy.get("div:nth-child(1) > .relative > #confirm_password").type(
  //     `Passwrod1234`
  //   );

  //   cy.get("#accept-term-btn").click();
  //   cy.get("div:nth-child(1) > #setup-user-submit").click();

  //   cy.contains("username has been used").should("exist");
  // });
  // it("sigh up to fail username not match pattern", () => {
  //   cy.visit(BASE_URL);

  //   cy.get(`.border-r-\\[\\#20476b\\]`).click();
  //   cy.get("div:nth-child(1) > .relative > #username").type(`ken*`);
  //   cy.get("div:nth-child(1) > .relative > #firstName").type("firstName");
  //   cy.get("div:nth-child(1) > .relative > #lastName").type("lastName");
  //   cy.get("div:nth-child(1) > .relative > #email").type(
  //     `emailTest${new Date().getSeconds()}@test.com`
  //   );
  //   cy.get("div:nth-child(1) > .relative > #password").type(`Passwrod1234`);
  //   cy.get("div:nth-child(1) > .relative > #confirm_password").type(
  //     `Passwrod1234`
  //   );

  //   cy.get("#accept-term-btn").click();
  //   cy.get("div:nth-child(1) > #setup-user-submit").click();

  //   cy.contains(
  //     "username must match ^[a-zA-Z0-9\\s]+$ regular expression"
  //   ).should("exist");
  // });
  // it("sign up to fail username not match pattern and over 50 characters", () => {
  //   cy.visit(BASE_URL);
  //   cy.get(`.border-r-\\[\\#20476b\\]`).click();
  //   cy.get("div:nth-child(1) > .relative > #username").type(
  //     `ken212345678901234567890123456789012345678901234567890`
  //   );
  //   cy.get("div:nth-child(1) > .relative > #firstName").type("firstName");
  //   cy.get("div:nth-child(1) > .relative > #lastName").type("lastName");
  //   cy.get("div:nth-child(1) > .relative > #email").type(
  //     `emailTest${new Date().getSeconds()}@test.com`
  //   );
  //   cy.get("div:nth-child(1) > .relative > #password").type(`Passwrod1234`);
  //   cy.get("div:nth-child(1) > .relative > #confirm_password").type(
  //     `Passwrod1234`
  //   );

  //   cy.get("#accept-term-btn").click();
  //   cy.get("div:nth-child(1) > #setup-user-submit").click();

  //   cy.contains(
  //     "username must be shorter than or equal to 30 characters"
  //   ).should("exist");
  // });
  // it("sigh up to fail firstName not match pattern", () => {
  //   cy.visit(BASE_URL);

  //   cy.get(`.border-r-\\[\\#20476b\\]`).click();
  //   cy.get("div:nth-child(1) > .relative > #username").type(`ken`);
  //   cy.get("div:nth-child(1) > .relative > #firstName").type("firstName1+=%^");
  //   cy.get("div:nth-child(1) > .relative > #lastName").type("lastName");
  //   cy.get("div:nth-child(1) > .relative > #email").type(
  //     `emailTest${new Date().getSeconds()}@test.com`
  //   );
  //   cy.get("div:nth-child(1) > .relative > #password").type(`Passwrod1234`);
  //   cy.get("div:nth-child(1) > .relative > #confirm_password").type(
  //     `Passwrod1234`
  //   );

  //   cy.get("#accept-term-btn").click();
  //   cy.get("div:nth-child(1) > #setup-user-submit").click();

  //   cy.contains(
  //     "firstName must match ^[a-zA-Z\\s]+$ regular expression"
  //   ).should("exist");

  // });
  // it("Sign Up to fail server fail bad request 500", () => {
  //   cy.visit(BASE_URL);
  //   cy.get("div:nth-child(1) > .relative > #username").type(`ken`);
  //   cy.get("div:nth-child(1) > .relative > #firstName").type("firstName1+=%^");
  //   cy.get("div:nth-child(1) > .relative > #lastName").type("lastName");
  //   cy.get("div:nth-child(1) > .relative > #email").type(`emailTest${new Date().getSeconds()}@test.com`);
  //   cy.get("div:nth-child(1) > .relative > #password").type(`Passwrod1234`);
  //   cy.get("div:nth-child(1) > .relative > #confirm_password").type(`Passwrod1234`);
  //   cy.get("#accept-term-btn").click();
  //   cy.get("div:nth-child(1) > #setup-user-submit").click();
  // });
});

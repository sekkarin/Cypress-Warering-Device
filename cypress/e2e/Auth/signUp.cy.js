const BASE_URL = "http://localhost:5173";

describe("SighUp", () => {
  it("sigh up to webpage success fully", () => {

    cy.visit(BASE_URL);

    cy.get(`.border-r-\\[\\#20476b\\]`).click();
    cy.get("#username").type(`usernameTest${new Date().getSeconds()}`);
    cy.get("#firstName").type("firstName");
    cy.get("#lastName").type("lastName");
    cy.get("#email").type(`emailTest${new Date().getSeconds()}@test.com`);
    cy.get("#password").type(`Passwrod1234`);
    cy.get("#confirm_password").type(`Passwrod1234`);

    cy.get("#link-checkbox").click();
    cy.get(".btn").click();

    cy.contains("Creating your account...").should("exist");
    cy.contains("Created your account and Please verify your email").should("exist");

  });
  it("sigh up to fial username to used", () => {
    cy.visit(BASE_URL);

    cy.get(`.border-r-\\[\\#20476b\\]`).click();
    cy.get("#username").type(`ken`);
    cy.get("#firstName").type("firstName");
    cy.get("#lastName").type("lastName");
    cy.get("#email").type(`emailTest${new Date().getSeconds()}@test.com`);
    cy.get("#password").type(`Passwrod1234`);
    cy.get("#confirm_password").type(`Passwrod1234`);

    cy.get("#link-checkbox").click();
    cy.get(".btn").click();

    cy.contains("username has been used").should("exist");
  });
  it("sigh up to fail username not match pattern", () => {
    cy.visit(BASE_URL);

    cy.get(`.border-r-\\[\\#20476b\\]`).click();
    cy.get("#username").type(`ken*`);
    cy.get("#firstName").type("firstName");
    cy.get("#lastName").type("lastName");
    cy.get("#email").type(`emailTest${new Date().getSeconds()}@test.com`);
    cy.get("#password").type(`Passwrod1234`);
    cy.get("#confirm_password").type(`Passwrod1234`);

    cy.get("#link-checkbox").click();
    cy.get(".btn").click();

    cy.contains(
      "username must match ^[a-zA-Z0-9\\s]+$ regular expression"
    ).should("exist");
  });
  it("sign up to fail username not match pattern and over 50 characters", () => {
    cy.visit(BASE_URL);
    cy.get(`.border-r-\\[\\#20476b\\]`).click();
    cy.get("#username").type(
      `ken212345678901234567890123456789012345678901234567890`
    );
    cy.get("#firstName").type("firstName");
    cy.get("#lastName").type("lastName");
    cy.get("#email").type(`emailTest${new Date().getSeconds()}@test.com`);
    cy.get("#password").type(`Passwrod1234`);
    cy.get("#confirm_password").type(`Passwrod1234`);

    cy.get("#link-checkbox").click();
    cy.get(".btn").click();

    cy.contains(
      "username must be shorter than or equal to 30 characters"
    ).should("exist");
  });
  it("sigh up to fail firstName not match pattern", () => {
    cy.visit(BASE_URL);

    cy.get(`.border-r-\\[\\#20476b\\]`).click();
    cy.get("#username").type(`ken`);
    cy.get("#firstName").type("firstName1+=%^");
    cy.get("#lastName").type("lastName");
    cy.get("#email").type(`emailTest${new Date().getSeconds()}@test.com`);
    cy.get("#password").type(`Passwrod1234`);
    cy.get("#confirm_password").type(`Passwrod1234`);

    cy.get("#link-checkbox").click();
    cy.get(".btn").click();

    cy.contains(
      "firstName must match ^[a-zA-Z\\s]+$ regular expression"
    ).should("exist");
  });
});
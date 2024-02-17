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
    // cy.contains(`username must match`).should("exist");
    cy.contains("Creating your account...").should("exist");
    cy.contains("Created your account and Please verify your email").should("exist");
  });
});

const BASE_URL = "http://localhost:5173";
describe("View Account User", () => {
  it("view and deleted account ", () => {
    cy.visit(BASE_URL);
    
    // login account
    cy.contains("Sign In").click();
    cy.get("div:nth-child(1) > .relative > #username").type("boat");
    cy.get("div:nth-child(1) > .relative > #password").type("19092545Boat");
    cy.get("#setup-user-drawer-submit").click();
    
    // view account
    cy.get("#user-profile-image").click();
    cy.get("#account-user-drawer-nav-link").click();
    cy.screenshot();

    // delete account 
    cy.get("#back-to-home-btn").click()
    cy.get("#user-profile-image").click();
    cy.get("#account-user-drawer-nav-link").click();
    cy.get("#delete-account-btn").click();
    cy.contains("Delete account").should("exist");
    // cy.get("#submit-delete-account-dialog-btn").click();
    cy.get("#cancel-delete-account-btn").click();
  });

});

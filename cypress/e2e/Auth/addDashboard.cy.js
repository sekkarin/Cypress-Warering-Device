import { login } from "./spec.cy";

describe("Add Dashboard Test", () => {
  it("should login successfully with correct credentials and perform device operations", () => {
    login("AumNatthacha", "Natthacha2002");

    //Add Dashboard
    cy.get("#dashboard-nav-link-sidebar").click();
    // cy.get("#toggle-add-dashboard-dialog-btn").click();
    // cy.get("#nameDashboard").type("PTT-3");
    // cy.get('#description').type('PTT-3', { force: true });
    // cy.get("#submit-add-dashboard-btn").click();

    //Edit
    // cy.get("#edit-dashboard-option-6683ad5ec7b871479e6125e1").click();
    // cy.get("#nameDashboard").clear().type("PT-49");
    // cy.get("#description").clear({ force: true }).type("PT-49", { force: true });
    // cy.get("#submit-edit-dashboard-btn").click();

    //DELETED
    cy.get("#delete-dashboard-option-6683ad5ec7b871479e6125e1").click();
    cy.wait(2000);
    cy.get("#confirm-delete-dashboard-btn").click();

    cy.screenshot();
  });
});

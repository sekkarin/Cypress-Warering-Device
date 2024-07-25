import { login } from "./spec.cy";

describe("Add Dashboard Test", () => {
  it("should login successfully with correct credentials and perform device operations", () => {
    login("boat", "19092545Boat");

    //Add Dashboard
    cy.get("#dashboard-nav-link-sidebar").click();
    
    // cy.get("#toggle-add-dashboard-dialog-btn").click();
    // cy.get("#nameDashboard").type(`PTT-3`);
    // cy.get('#description').type(`PTT-3${new Date().getSeconds()}`, { force: true });
    // cy.get("#submit-add-dashboard-btn").click();
    // cy.contains("Your PTT-3 dashboard has been added").should("exist");

    //Edit
    
    cy.get("#edit-dashboard-option-669a17a7d45d6a622a00cbf1").click();
    cy.get("#nameDashboard").clear().type(`PTT-45`);
    cy.get("#description").clear({ force: true }).type("PTT-67", { force: true });
    cy.get("#submit-edit-dashboard-btn").click({ force: true });
    // cy.contains("updated your dashboard ").should("exist");
    
    

    //DELETED
    // cy.get("#delete-dashboard-option-669a155bd45d6a622a00cbe0").click();
    // cy.wait(2000);
    // cy.get("#confirm-delete-dashboard-btn").click();

    cy.screenshot();
  });
});

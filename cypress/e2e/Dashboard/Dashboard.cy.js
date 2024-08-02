import { login } from "./spec.cy";

describe("Dashboard Test", () => {
  it("should login successfully with correct credentials and perform device operations", () => {
    login("boat", "19092545Boat");

    //Add Dashboard
    cy.get("#dashboard-nav-link-sidebar").click();

    cy.get("#toggle-add-dashboard-dialog-btn").click();
    cy.get("#nameDashboard").type(`PTT-3`);
    cy.get("#description").type(`PTT-3${new Date().getSeconds()}`, {
      force: true,
    });
    cy.get("#submit-add-dashboard-btn").click();
    cy.contains("Your PTT-3 dashboard has been added").should("exist");
    cy.screenshot();
  });
  it(" user can edit device", () => {
    login("boat", "19092545Boat");
    cy.get("#dashboard-nav-link-sidebar").click();
    // เลือก id ที่จะทำการ edit
    cy.get("#edit-dashboard-option-66a34593a44d44eda5c81438").click();
    cy.get("#nameDashboard").clear().type(`PTT-45`);
    cy.get("#description")
      .clear({ force: true })
      .type("PTT-67", { force: true });
    cy.get("#submit-edit-dashboard-btn").click({ force: true });
    cy.contains("updated your dashboard ").should("exist");
    cy.screenshot();
  });

  it(" user can Delete device", () => {
    login("boat", "19092545Boat");
    // เลือก id ที่จะทำการ Delete
    cy.get("#delete-dashboard-option-66a34593a44d44eda5c81438").click();
    cy.wait(2000);
    cy.get("#confirm-delete-dashboard-btn").click();
    cy.screenshot();
  });

  it(" user can Search Dashboard",()=>{
    login("boat", "19092545Boat");
    cy.get("#dashboard-nav-link-sidebar").click();
    cy.get("#search_dashboard").click();
    cy.get("#search_dashboard").type("PTT-45")
    cy.contains("PTT-45").should('exist')
    cy.screenshot(); 
  })
});

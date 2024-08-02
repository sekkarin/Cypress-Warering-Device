import { login } from "./spec.cy";

describe("Add Device", () => {
  // login to web
  it("TC User can Add Device ", () => {
    login("boat", "19092545Boat");

    cy.get("#devices-nav-link-sidebar").click();
    cy.get("#setup-user-submit").click();
     cy.get("#nameDevice").type("DV1");
     cy.get("#usernameDevice").type("DV-1");
     cy.get("#password").type("password123456");
     cy.get("#description").type("Device description");

     cy.get("#topics").type(`Topics Device${new Date().getSeconds()}`);
    //  cy.get("#Qos").click();
     cy.get("#retain-checkbox").click();
     cy.get("#add-device-submit-btn").click();
     cy.contains("Created your DV1 device").should("exist");
     cy.screenshot("");
  });
  it("TC User can't add device NameDevice To use",()=>{
    login("boat", "19092545Boat");

    cy.get("#devices-nav-link-sidebar").click();
    cy.get("#setup-user-submit").click();
     cy.get("#nameDevice").type("DV1");
     cy.get("#usernameDevice").type("DV-2");
     cy.get("#password").type("password123456");
     cy.get("#description").type("Device description");

     cy.get("#topics").type(`Topics Device${new Date().getSeconds()}`);
    //  cy.get("#Qos").click();
     cy.get("#retain-checkbox").click();
     cy.get("#add-device-submit-btn").click();
     cy.contains("Created your DV1 device").should("exist");
     cy.screenshot("");
  })
});

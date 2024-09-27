import { login } from "./spec.cy";
describe("widget in device", () => {
  it("TC5001 Add widget", () => {
    login("boat", "19092545Boat");
    cy.get("#devices-nav-link-sidebar").click();
    cy.contains("Sensor_01").click();
    cy.get("#toggle-add-widget-dialog-btn").click();
    cy.get("#select_widget").select("MessageBox");
    cy.get("#label").type("อุณหภูมิ");
    cy.get("#value").type("ความร้อน");
    cy.get("#unit").type("องศา");
    cy.get("#add-widget-submit-btn").click();
    cy.contains("Created your อุณหภูมิ widget successfully").should(
      "be.visible"
    );
    cy.screenshot();
  });

  it("TC5002 Edit Widget", () => {
    login("boat", "19092545Boat");
    cy.get("#devices-nav-link-sidebar").click();
    cy.contains("Sensor_01").click();
    cy.get("#66daa9b8baaef97bf34ce2b4-message-box-device-options").click();
    cy.contains("Edit").click();
    cy.get("#label").clear().type("แรงดันของน้ำ");
    cy.get("#value").clear().type("ความดัน");
    cy.get("#unit").clear().type("Pa");
    cy.get("#add-widget-submit-btn").click();
    cy.contains("Your widget was updated").should("be.visible");
    cy.screenshot();
  });

  it("TC5003 Delete Widget", () => {
    login("boat", "19092545Boat");
    cy.get("#devices-nav-link-sidebar").click();
    cy.contains("Sensor_01").click();
    cy.get("#66daad7dbaaef97bf34ce4a4-message-box-device-options").click();
    cy.contains("Delete").click();
    cy.get("#delete-submit-widget-device-btn").click({ force: true });
    cy.contains("Your widget was delete").should("be.visible");
    cy.screenshot();
  });

  it("TC5004 not have label", () => {
    login("boat", "19092545Boat");
    cy.get("#devices-nav-link-sidebar").click();
    cy.contains("Sensor_01").click();
    cy.get("#toggle-add-widget-dialog-btn").click();
    cy.get("#select_widget").select("MessageBox");
    cy.get("#label").type("อุณหภูมิ")
    // cy.get("#value").type("ความร้อน");
    cy.get("#unit").type("องศา");
    cy.get("#add-widget-submit-btn").click();
    cy.contains("Please provide a value").should("exist");
    cy.screenshot();
  });

  it("TC5005 not have Value", () => {
    login("boat", "19092545Boat");
    cy.get("#devices-nav-link-sidebar").click();
    cy.contains("Sensor_01").click();
    cy.get("#toggle-add-widget-dialog-btn").click();
    cy.get("#select_widget").select("MessageBox");
    cy.get("#label").type("อุณหภูมิ");
                                                                             
    cy.get("#unit").type("องศา");
    cy.get("#add-widget-submit-btn").click();
    cy.contains("Please provide a value").should("exist");
    cy.screenshot();
  });

  it("TC5006 not have Unit", () => {
    login("boat", "19092545Boat");
    cy.get("#devices-nav-link-sidebar").click();
    cy.contains("Sensor_01").click();
    cy.get("#toggle-add-widget-dialog-btn").click();
    
  });
});

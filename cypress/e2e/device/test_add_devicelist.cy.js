import { login } from "./spec.cy";

describe("Device List Test", () => {
  it("should login successfully with correct credentials and perform device operations", () => {
    // Login
    login("AumNatthacha", "Natthacha2002");

    // Add Device
    cy.get("#devices-nav-link-sidebar").click();
    cy.contains("Devices").click();
    cy.get("#setup-user-submit").click();
    cy.get("#nameDevice").type("Sensor_01");
    cy.get("#usernameDevice").type("user");
    cy.get("#password").type("password123");
    cy.get("#description").type("แดชบอร์ดนี้ใช้ในการตรวจสอบข้อมูลจาก Sensor_01 เช่น อุณหภูมิและความชื้น");
    cy.get("#topics").type("ข้อมูลส่งทุก 10 นาที");
    cy.get("#Qos").type("0");
    cy.get("#retain-checkbox").click();
    cy.get("#add-device-submit-btn").click();
    cy.contains("Created your Sensor_01 device").should("be.visible");
    cy.screenshot();

    // Edit Device
    cy.get("#669135ccfed9b7834140e10f-edit-device-btn").click();
    cy.get("#nameDevice").clear().type("Sensor_02");
    cy.get("#usernameDevice").clear().type("user");
    cy.get("#password").clear().type("password123");
    cy.get("#description").clear().type("อุณหภูมิและความชื้น");
    cy.get("#topics").clear().type("ข้อมูลส่งทุก 11 นาที");
    cy.get("#submit-edit-dashboard-btn").click();
    cy.contains("Your device information has been edited successfully").should("be.visible");
    cy.screenshot();

    // Delete Device (Optional: Uncomment if needed)
    cy.get("#66913723fed9b7834140e190-delete-device-btn").click();
    cy.wait(2000);
    cy.get("#confirm-delete-device").click();
    cy.contains("Your device has been deleted").should("be.visible");
    cy.screenshot();
  });
});

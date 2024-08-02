import { login } from "./spec.cy";

describe("AddDevice", () => {
  // 
  it("TC User can Add Device ", () => {
    login("boat", "19092545Boat");

    cy.get("#devices-nav-link-sidebar").click();
    cy.get("#setup-user-submit").click();
    cy.get("#nameDevice").type("Sensor_01");
    cy.get("#usernameDevice").type(`User${new Date().getSeconds()}`);
    cy.get("#password").type("password123");
    cy.get("#description").type("แดชบอร์ดนี้ใช้ในการตรวจสอบข้อมูลจาก Sensor_01 เช่น อุณหภูมิและความชื้น");
    cy.get("#topics").type(` ข้อมูลส่งทุก ${new Date().getSeconds()} นาที`);
    cy.get("#Qos").type("0");
    cy.get("#retain-checkbox").click();
    cy.get("#add-device-submit-btn").click();
    cy.contains("Created your Sensor_01 device").should("be.visible");
  });

  // username Device ซ้ำ
  it("TC UsernameDevice to used ",()=>{
    login("boat", "19092545Boat");
    cy.get("#devices-nav-link-sidebar").click();
    cy.get("#setup-user-submit").click();
    cy.get("#nameDevice").type("Sensor_02");
    cy.get("#usernameDevice").type("User");
    cy.get("#password").type("password123456");
    cy.get("#description").type("แดชบอร์ดนี้ใช้ในการตรวจสอบข้อมูลจาก Sensor_01 เช่น อุณหภูมิและความชื้น");

    cy.get("#topics").type(` ข้อมูลส่งทุก ${new Date().getSeconds()} นาที`);
     cy.get("#Qos").type("0");
     cy.get("#retain-checkbox").click();
     cy.get("#add-device-submit-btn").click();
     cy.contains("Device with this usernameDevice already exists").should("exist");
     cy.screenshot("");
  });

  // ผู้ใช้ได้ใช้หัวข้อที่กำหนดให้กับอุปกรณ์อื่นแล้ว
  it("TC The user has already used the topic assigned to another device.",()=>{
    login("boat", "19092545Boat");
    cy.get("#devices-nav-link-sidebar").click();
    cy.get("#setup-user-submit").click();
     cy.get("#nameDevice").type("Sensor_03");
     cy.get("#usernameDevice").type("User2");
     cy.get("#password").type("password123456");
     cy.get("#description").type("แดชบอร์ดนี้ใช้ในการตรวจสอบข้อมูลจาก Sensor_01 เช่น อุณหภูมิและความชื้น");

     cy.get("#topics").type("Topics Device");
     cy.get("#Qos").type("0");
     cy.get("#retain-checkbox").click();
     cy.get("#add-device-submit-btn").click();
     cy.contains("Topics already assigned to another device").should("exist");
     cy.screenshot("");
  })
  // ชื่อดีไวซ์ต้องสั้นกว่าหรือเท่ากับ 25 อักขระ
  it("TC nameDevice must be shorter than or equal to 25 characters ",()=>{
    login("boat", "19092545Boat");
    cy.get("#devices-nav-link-sidebar").click();
    cy.get("#setup-user-submit").click();
    cy.get("#nameDevice").type("Sensor_1234567890123456789123456789");
    cy.get("#usernameDevice").type("User");
    cy.get("#password").type("password123456");
    cy.get("#description").type("แดชบอร์ดนี้ใช้ในการตรวจสอบข้อมูลจาก Sensor_1234567890123456789123456789 เช่น อุณหภูมิและความชื้น");
    cy.get("#topics").type(`Topics Device${new Date().getSeconds()}`);
     cy.get("#Qos").type("0");
     cy.get("#retain-checkbox").click();
     cy.get("#add-device-submit-btn").click();
     cy.contains("nameDevice must be shorter than or equal to 25 characters").should("exist");
     cy.screenshot("");
  })


  it("TC user can edit Device  ",()=>{
    login("boat", "19092545Boat");
  
    // cy.get("#669135ccfed9b7834140e10f-edit-device-btn").click();
    cy.get("#nameDevice").clear().type("Sensor_02");
    cy.get("#usernameDevice").clear().type("user");
    cy.get("#password").clear().type("password123");
    cy.get("#description").clear().type("อุณหภูมิและความชื้น");
    cy.get("#topics").clear().type("ข้อมูลส่งทุก 11 นาที");
    cy.get("#submit-edit-dashboard-btn").click();
    cy.contains("Your device information has been edited successfully").should("be.visible");
    cy.screenshot();
  })
});

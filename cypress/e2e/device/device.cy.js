import { login } from "./spec.cy";

describe("Device", () => {
  it("TC4001 User can Add Device ", () => {
    login("Sekkarin", "Password1234");

    cy.get("#devices-nav-link-sidebar").click();
    cy.get("#setup-user-submit").click();
    cy.get("#nameDevice").type("Sensor_01");
    cy.get("#usernameDevice").type(`User${new Date().getSeconds()}`);
    cy.get("#password").type("password123");
    cy.get("#description").type(
      "แดชบอร์ดนี้ใช้ในการตรวจสอบข้อมูลจาก Sensor_01 เช่น อุณหภูมิและความชื้น"
    );
    cy.get("#topics").type(
      ` ข้อมูลส่งทุก ${new Date().getMilliseconds()} นาที`
    );
    cy.get("#Qos").type("0");
    cy.get("#retain-checkbox").click();
    cy.get("#add-device-submit-btn").click();
    cy.contains("Created your Sensor_01 device").should("be.visible");
    cy.screenshot();
  });

  //  Edit Device
  it("TC4002 user can edit Device  ", () => {
    login("Sekkarin", "Password1234");
    cy.get("#devices-nav-link-sidebar").click();
    cy.contains("Edit").click();
    cy.get("#nameDevice").clear().type("Sensor_08");
    cy.get("#usernameDevice")
      .clear()
      .type(`user kiki${new Date().getFullYear()}`);
    cy.get("#password").clear().type("password123");
    cy.get("#description").clear().type("อุณหภูมิและความชื้น");
    cy.get("#topics")
      .clear()
      .type(`ข้อมูลส่งทุก ${new Date().getFullYear()} นาที`);
    cy.get("#submit-edit-dashboard-btn").click();
    cy.contains("Your device information has been edited successfully").should(
      "exist"
    );
    cy.screenshot();
  });

  // deleted
  it("TC4003 User can delete device", () => {
    login("Sekkarin", "Password1234");
    cy.get("#devices-nav-link-sidebar").click();

    cy.contains("Delete").click();
    cy.wait(2000);
    cy.get("#confirm-delete-device").click();
    cy.contains("Your device has been deleted").should("be.visible");
    cy.screenshot();
  });

  // username Device ซ้ำ
  it("TC4004 UsernameDevice to used ", () => {
    login("Sekkarin", "Password1234");
    cy.get("#devices-nav-link-sidebar").click();
    cy.get("#setup-user-submit").click();
    cy.get("#nameDevice").type("Sensor_02");
    cy.get("#usernameDevice").type("User");
    cy.get("#password").type("password123456");
    cy.get("#description").type(
      "แดชบอร์ดนี้ใช้ในการตรวจสอบข้อมูลจาก Sensor_01 เช่น อุณหภูมิและความร้อน"
    );

    cy.get("#topics").type(` ข้อมูลส่งทุก ${new Date().getSeconds()} นาที`);
    cy.get("#Qos").type("0");
    cy.get("#retain-checkbox").click();
    cy.get("#add-device-submit-btn").click();
    cy.contains("Device with this usernameDevice already exists").should(
      "exist"
    );
    cy.screenshot("");
  });

  // // ผู้ใช้ได้ใช้หัวข้อที่กำหนดให้กับอุปกรณ์อื่นแล้ว
  it("TC4005 The user has already used the topic assigned to another device.", () => {
    login("Sekkarin", "Password1234");
    cy.get("#devices-nav-link-sidebar").click();
    cy.get("#setup-user-submit").click();
    cy.get("#nameDevice").type("Sensor_03");
    cy.get("#usernameDevice").type("User2");
    cy.get("#password").type("password123456");
    cy.get("#description").type(
      "แดชบอร์ดนี้ใช้ในการตรวจสอบข้อมูลจาก Sensor_01 เช่น อุณหภูมิและความเย็น"
    );

    cy.get("#topics").type("Topics Device");
    cy.get("#Qos").type("0");
    cy.get("#retain-checkbox").click();
    cy.get("#add-device-submit-btn").click();
    cy.contains("Topics already assigned to another device").should("exist");
    cy.screenshot("");
  });
  // // ชื่อดีไวซ์ต้องสั้นกว่าหรือเท่ากับ 25 อักขระ
  it("TC4006 nameDevice must be shorter than or equal to 25 characters ", () => {
    login("Sekkarin", "Password1234");
    cy.get("#devices-nav-link-sidebar").click();
    cy.get("#setup-user-submit").click();
    cy.get("#nameDevice").type("Sensor_1234567890123456789123456789");
    cy.get("#usernameDevice").type("User");
    cy.get("#password").type("password123456");
    cy.get("#description").type(
      "แดชบอร์ดนี้ใช้ในการตรวจสอบข้อมูลจาก Sensor_1234567890123456789123456789 เช่น อุณหภูมิและความชื้น"
    );
    cy.get("#topics").type(`Topics Device${new Date().getSeconds()}`);
    cy.get("#Qos").type("0");
    cy.get("#retain-checkbox").click();
    cy.get("#add-device-submit-btn").click();
    cy.contains(
      "nameDevice must be shorter than or equal to 25 characters"
    ).should("exist");
    cy.screenshot("");
  });

  it("TC4007 User not have Name Device", () => {
    login("Sekkarin", "Password1234");

    cy.get("#devices-nav-link-sidebar").click();
    cy.get("#setup-user-submit").click();
    cy.get("#nameDevice").type("Sensor_08");

    cy.get("#password").type("password123");
    cy.get("#description").type(
      "แดชบอร์ดนี้ใช้ในการตรวจสอบข้อมูลจาก Sensor_01 เช่น อุณหภูมิและความชื้น"
    );
    cy.get("#topics").type(` ข้อมูลส่งทุก ${new Date().getSeconds()} นาที`);
    cy.get("#Qos").type("0");
    cy.get("#retain-checkbox").click();
    cy.get("#add-device-submit-btn").click();
    cy.contains("Please provide all value").should("exist");
    cy.screenshot();
  });

  it("TC4008 User not have Username Device", () => {
    login("Sekkarin", "Password1234");

    cy.get("#devices-nav-link-sidebar").click();
    cy.get("#setup-user-submit").click();

    cy.get("#usernameDevice").type(`User${new Date().getSeconds()}`);
    cy.get("#password").type("password123");
    cy.get("#description").type(
      "แดชบอร์ดนี้ใช้ในการตรวจสอบข้อมูลจาก Sensor_01 เช่น อุณหภูมิและความชื้น"
    );
    cy.get("#topics").type(` ข้อมูลส่งทุก ${new Date().getSeconds()} นาที`);
    cy.get("#Qos").type("0");
    cy.get("#retain-checkbox").click();
    cy.get("#add-device-submit-btn").click();
    cy.contains("Please provide all value").should("exist");
    cy.screenshot();
  });

  it("TC4009 User not have password Device", () => {
    login("Sekkarin", "Password1234");

    cy.get("#devices-nav-link-sidebar").click();
    cy.get("#setup-user-submit").click();
    cy.get("#nameDevice").type("Sensor_08");
    cy.get("#usernameDevice").type(`User${new Date().getSeconds()}`);

    cy.get("#description").type(
      "แดชบอร์ดนี้ใช้ในการตรวจสอบข้อมูลจาก Sensor_01 เช่น อุณหภูมิและความชื้น"
    );
    cy.get("#topics").type(` ข้อมูลส่งทุก ${new Date().getSeconds()} นาที`);
    cy.get("#Qos").type("0");
    cy.get("#retain-checkbox").click();
    cy.get("#add-device-submit-btn").click();
    cy.contains("Please provide all value").should("exist");
    cy.screenshot();
  });

  it("TC40010 User not have Topic Device", () => {
    login("Sekkarin", "Password1234");

    cy.get("#devices-nav-link-sidebar").click();
    cy.get("#setup-user-submit").click();
    cy.get("#nameDevice").type("Sensor_08");
    cy.get("#usernameDevice").type(`User${new Date().getSeconds()}`);
    cy.get("#password").type("password123");
    cy.get("#description").type(
      "แดชบอร์ดนี้ใช้ในการตรวจสอบข้อมูลจาก Sensor_01 เช่น อุณหภูมิและความชื้น"
    );

    cy.get("#Qos").type("0");
    cy.get("#retain-checkbox").click();
    cy.get("#add-device-submit-btn").click();
    cy.contains("Please provide all value").should("exist");
    cy.screenshot();
  });

  it("TC40011 password must be longer than or equal to 4 characters ", () => {
    login("Sekkarin", "Password1234");

    cy.get("#devices-nav-link-sidebar").click();
    cy.get("#setup-user-submit").click();
    cy.get("#nameDevice").type("Sensor_08");
    cy.get("#usernameDevice").type(`User${new Date().getSeconds()}`);
    cy.get("#password").type("123");
    cy.get("#description").type(
      "แดชบอร์ดนี้ใช้ในการตรวจสอบข้อมูลจาก Sensor_01 เช่น อุณหภูมิและความชื้น"
    );
    cy.get("#topics").type(` ข้อมูลส่งทุก ${new Date().getSeconds()} นาที`);
    cy.get("#Qos").type("0");
    cy.get("#retain-checkbox").click();
    cy.get("#add-device-submit-btn").click();
    cy.contains("password must be longer than or equal to 4 characters").should(
      "exist"
    );
    cy.screenshot();
  });

  // search Device
  it("TC40012 User can Search Device", () => {
    login("Sekkarin", "Password1234");
    cy.get("#devices-nav-link-sidebar").click();

    cy.get("#search_device").type("Sensor_02");
    cy.contains("Sensor_02").should("exist");

    cy.screenshot();
  });

  // filter
  it("TC40013 User can filter Sort by Date Oldest", () => {
    login("Sekkarin", "Password1234");
    cy.get("#devices-nav-link-sidebar").click();

    cy.get("#sort-by-date-select").select("Oldest");
    cy.get("#registration-66c83b7fddd4126f8900bfe0").siblings();
    cy.screenshot();
  });

  it("TC40014 User can filter Sort by Date Latest", () => {
    login("Sekkarin", "Password1234");
    cy.get("#devices-nav-link-sidebar").click();

    cy.get("#sort-by-date-select").select("Latest");
    cy.get("#registration-66c846a2ddd4126f8900c24b").siblings();
    cy.screenshot();
  });

  it("TC40015 User can filter permission allow", () => {
    login("Sekkarin", "Password1234");
    cy.get("#devices-nav-link-sidebar").click();

    cy.get("#filter-by-permission-select").select("Permission Allow");
    cy.contains("Allow").should("exist");
    cy.screenshot();
  });

  it("TC40016 User can filter permission Deny", () => {
    login("Sekkarin", "Password1234");
    cy.get("#devices-nav-link-sidebar").click();

    cy.get("#filter-by-permission-select").select("Permission Deny");
    cy.contains("Deny").should("exist");
    cy.screenshot();
  });
});

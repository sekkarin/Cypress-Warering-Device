const BASE_URL = "http://localhost:5173";
describe("Edit account", () => {
  // เปลี่ยนชื่อ สำเร็จ
  // it("edit account firstName and lastName", () => {
  //   cy.visit(BASE_URL);
  //   // login account
  //   cy.contains("Sign In").click();
  //   cy.get("div:nth-child(1) > .relative > #username").type("boat");
  //   cy.get("div:nth-child(1) > .relative > #password").type("19092545Boat");
  //   cy.get("#setup-user-drawer-submit").click();
  //   // edit Name
  //   cy.get("#user-profile-image").click();
  //   cy.get("#edit-profile-drawer-nav-link").click();
  //   cy.get("#firstName").click();
  //   cy.get("#firstName").clear();
  //   cy.get("#firstName").type(`User_firstName`);
  //   cy.get("#lastName").click();
  //   cy.get("#lastName").clear();
  //   cy.get("#lastName").type("User_lastName");
  //   // รอใส่ตัวสมบูรณ์
  //   cy.get("#save-update-new-user-info-btn").click();
  //   cy.screenshot();
  // });

  // // ชื่อไม่แมท
  // it("Edit firstName not match pattern", () => {
  //   cy.visit(BASE_URL);
  //   // login account
  //   cy.contains("Sign In").click();
  //   cy.get("div:nth-child(1) > .relative > #username").type("boat");
  //   cy.get("div:nth-child(1) > .relative > #password").type("19092545Boat");
  //   cy.get("#setup-user-drawer-submit").click();
  //   // edit Name
  //   cy.get("#user-profile-image").click();
  //   cy.get("#edit-profile-drawer-nav-link").click();
  //   cy.get("#firstName").click();
  //   cy.get("#firstName").clear();
  //   cy.get("#firstName").type(`User_firstName${new Date().getSeconds()}`);
  //   cy.get("#lastName").click();
  //   cy.get("#lastName").clear();
  //   cy.get("#lastName").type("User_lastName");
  //   // รอใส่ตัวสมบูรณ์
  //   cy.get("#save-update-new-user-info-btn").click();
  //   cy.screenshot();
  // });

  //   if (
  //     ("file Upload",
  //     function () {
  //       it("File upload", function () {
  //         cy.visit("https://tinypng.com/");
  //       });
  //     })
  //   )

  
  //   เปลี่ยนรูปภาพโปรไฟล์
  it("Chang Photo Profile", () => {
    cy.visit(BASE_URL);
    // login
    cy.contains("Sign In").click();
    cy.get("div:nth-child(1) > .relative > #username").type("boat");
    cy.get("div:nth-child(1) > .relative > #password").type("19092545Boat");
    cy.wait(5000)
    cy.get("#setup-user-drawer-submit").click();
    // กดเข้าหน้า account
    cy.get("#user-profile-image").click();
    cy.get("#edit-profile-drawer-nav-link").click();

    cy.get("#update-user-profile-btn").click();
    cy.wait(2000)
    cy.get("#file-drop-zone").click();
    cy.wait(5000)
  });
  // //   ลบรูปภาพโปรไฟล์
  // it("Delete Photo Profile", () => {
  //   cy.get("#remove-user-profile-btn").click();
  // });

  it("", () => {});
});

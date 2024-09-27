const BASE_URL = "http://localhost:5173";
describe("Admin test", () => {
  // แอ็ดมิน ล็อคอินสำเร็จ
  it("Admin login Success Fully ", () => {
    cy.visit(BASE_URL);
    cy.get("#open-big-login-drawer").click();
    cy.get("div:nth-child(1) > .relative > #username").type("");
    cy.get("div:nth-child(1) > .relative > #password").type("");
    cy.get("div:nth-child(1) > #setup-user-submit").click();
    cy.screenshot();
  });
  //   แอ็ดมินใส่ชื่อไม่ถูกต้อง
  it("Login to fail User Not math", () => {
    cy.visit(BASE_URL);
    cy.contains("Sign In").click();
    cy.get("div:nth-child(1) > .relative > #username").type();
    cy.get("div:nth-child(1) > .relative > #password").type();
    cy.get("div:nth-child(1) > #setup-user-submit").click();
    cy.contains("username must match").should("exist");
    cy.screenshot();
  });
  //   แอ็ดมิน ใส่รหัสผ่านไม่ถูกต้อง
  it("Login to fail Password Not Math", () => {
    cy.visit(BASE_URL);
    cy.contains("Sign In").click();
    cy.get("div:nth-child(1) > .relative > #username").type();
    cy.get("div:nth-child(1) > .relative > #password").type();
    cy.get("div:nth-child(1) > #setup-user-submit").click();
    cy.contains("password is incorrect").should("exist");
    cy.screenshot
  });
});

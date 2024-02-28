const BASE_URL = "http://localhost:5173";
function extractResetLinkFromEmail(email) {
  // ประมวลผลข้อความอีเมลเพื่อหาลิงก์การรีเซ็ตรหัสผ่าน
  const resetLinkRegex = /https?:\/\/[^\\'">\s]+/i;
  const resetLinkMatch = email.match(resetLinkRegex);
  if (resetLinkMatch) {
    return resetLinkMatch[0];
  } else {
    throw new Error("Reset link not found in email");
  }
}

describe("Password Reset", () => {
  it("should reset password via email", () => {
    // Visit the password reset page
    cy.visit(BASE_URL); // เข้าสู่หน้าลืมรหัสผ่านของแอปพลิเคชัน
    cy.get("#open-big-login-drawer").click(); // เปิดหน้าต่างล็อกอินใหญ่
    cy.get("div:nth-child(1) > .flex #forget-pass-btn").click(); // คลิกที่ปุ่ม "Forget password"
    cy.get("#email_forget_password").type("644259036@webmail.npru.ac.th"); // ใส่อีเมลล์
    cy.get("#forget-pass-submit").click(); // คลิกปุ่มส่ง

    // Fetch the reset email
    cy.task("fetchResetEmail", "644259036@webmail.npru.ac.th").then((email) => {
      const token = cy.task("generateToken");
      const resetLink = `http://localhost:5173/reset-password/*?token=${token}`;
      // Extract the reset link from the email
    //   const resetLink = extractResetLinkFromEmail(email);
      // Click on the reset link
      cy.visit(resetLink);
      // Enter new password
      cy.get("#newPassword").type("Newpassword123");
      // Confirm new password
      // cy.get('input[name="confirm-password"]').type('newpassword123');
      // Click on the submit button
      cy.get("#reset-password-submit").click();
      // Assert that password reset was successful
      cy.contains("Password reset successful").should("be.visible");
    });
  });
});


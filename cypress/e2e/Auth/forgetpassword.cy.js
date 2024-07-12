const BASE_URL = 
// "http://warering.online/",
"http://localhost:5173/";
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
function generateToken() {
  // สร้าง token แบบสุ่มเพื่อให้เป็นตัวอย่าง
  return Math.random().toString(36).substring(2);
}
function createResetPasswordLink(email) {
  const token = generateToken(); // สร้าง token
  // สร้างลิงก์รีเซ็ตรหัสผ่านพร้อมกับ token
  const resetLink = `http://localhost:5173/reset-password/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjY0NDI1OTAzNkB3ZWJtYWlsLm5wcnUuYWMudGgiLC`;
  return { resetLink, token }; // return ทั้งลิงก์และ token
}

describe("Password Reset", () => {
  it("should reset password via email", () => {
    // Visit the password reset page
    cy.visit(BASE_URL); // เข้าสู่หน้าลืมรหัสผ่านของแอปพลิเคชัน
    cy.get("#toggle-big-login-landing-drawer-btn").click(); // เปิดหน้าต่างล็อกอินใหญ่
    cy.get("#forget-pass-drawer-btn").click(); // คลิกที่ปุ่ม "Forget password"
    cy.get("#email_forget_password").type("644259036@webmail.npru.ac.th"); // ใส่อีเมลล์
    cy.get("#forget-pass-drawer-submit").click(); // คลิกปุ่มส่ง

    // Fetch the reset email
    cy.task("fetchResetEmail", "644259036@webmail.npru.ac.th").then((email) => {
      // const token = cy.task("generateToken");
      // const resetLink = `http://localhost:5173/reset-password/${token}`;
      const { resetLink, token } = createResetPasswordLink('644259036@webmail.npru.ac.th');
      // Extract the reset link from the email
    //   const resetLink = extractResetLinkFromEmail(email);
      // Click on the reset link
      cy.visit(resetLink);
      // Enter new password
      cy.get("#newPassword").type("Newpassword123");
    
      cy.get("#reset-password-submit-btn").click();
    
      cy.contains("Password reset successful").should("be.visible");
    });
  });
});


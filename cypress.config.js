const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://warering.online/", // กำหนด baseUrl
    invalidProperty: true,
    pageLoadTimeout: 10000,

    setupNodeEvents(on, config) {
      on("task", {
        checkEmail: ({ email }) => {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const isValidEmail = emailPattern.test(email);
          return new Promise((resolve, reject) => {
            if (
              isValidEmail === `emailTest${new Date().getSeconds()}@test.com`
            ) {
              resolve(true); // Resolve with true if email is valid
            } else {
              reject(new Error("Invalid email")); // Reject with error if email is invalid
            }
          });
        },
        fetchResetEmail(email) {
          // โค้ดเพื่อดึงอีเมลรีเซ็ตรหัสผ่านและคืนค่าลิงก์
          // ย่างไรก็ตามในที่นี้เราจะใช้ค่าอย่างง่ายเป็นตัวอย่าง
          return "http://localhost:5173/reset-password/*";
        },
        generateToken() {
          // สร้าง token แบบสุ่มเพื่อให้เป็นตัวอย่าง
          return Math.random().toString(36).substring(2);
        },
      });
    },
  },
  "reporter": "nyan",
  // "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports/mochawesome-report",
    "overwrite": false,
    "html": true,
    "json": true,
    "timestamp": "mmddyyyy_HHMMss",
  },
  screenshotsFolder: "cypress/screenshots/",
});

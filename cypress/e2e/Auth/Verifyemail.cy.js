const BASE_URL = "http://localhost:5173";
import { user1 } from "../../fixtures/User.json";
const API_KEY =
  //   "792f1472707489ed6857e342d52119a95869f09da9a9b3b658dbc1606bde6747";
  "b1a03a68dcbc3d30c44e6ac4fa4f3139e46bc2d7c03b78163d3c5b33b5688363";
describe("MailSlurp Example", () => {
  it("Verify Email using MailSlurp", () => {
    // สร้างที่อยู่อีเมลชั่วคราว
    cy.request({
      method: "POST",
      url: "https://api.mailslurp.com/inboxes",
      headers: {
        "x-api-key": API_KEY, // ใส่ API Key ของคุณที่นี่
      },
    }).then((response) => {
      const emailAddress = response.body.emailAddress;
      // ทำบางอย่างเช่นลงทะเบียนหรือเรียกใช้งาน
      cy.visit(BASE_URL);
      cy.get(`.border-r-\\[\\#20476b\\]`).click();
      cy.get("div:nth-child(1) > .relative > #username").type(`userName${new Date().getSeconds()}`);
      cy.get("div:nth-child(1) > .relative > #firstName").type(user1.firstName);
      cy.get("div:nth-child(1) > .relative > #lastName").type(user1.lastName);
      cy.get("div:nth-child(1) > .relative > #email").type(`emailTest${new Date().getSeconds()}@test.com`);
      cy.get("div:nth-child(1) > .relative > #password").type(user1.password);
      cy.get("div:nth-child(1) > .relative > #confirm_password").type(
        user1.confirmPassword
      );
      cy.get("#accept-term-btn").click();
      cy.wait(2000);
      cy.get("div:nth-child(1) > #setup-user-submit").click();
      cy.contains("Creating your account...").should("exist");
      cy.wait(3000);
      cy.contains("Created your account and Please verify your email").should(
        "exist"
      );

      // รอรับอีเมล
      cy.wait(2000); // รออีเมล 10 วินาที

      // ดึงอีเมลล่าสุด
      cy.request({
        method: "GET",
        url: `https://api.mailslurp.com/inboxes/${emailAddress}/`,
        headers: {
          "x-api-key": API_KEY,
        },
        failOnStatusCode: false,
      }).then((emailsResponse) => {
        cy.log("emailResponse",emailsResponse)
        const latestEmailID = emailsResponse.body[0]; // เลือกอีเมลล่าสุดจากอาเรย์ emailsResponse.body
        cy.log("latestEmail",latestEmailID)
        if (latestEmailID) {
          // ตรวจสอบว่ามี latestEmail หรือไม่ก่อนนำไปใช้งาน
          cy.request({
            method: "GET",
            url: `https://api.mailslurp.com/emails/${emailAddress}/${latestEmailID}`,
            // url: `https://api.mailslurp.com/emails/22619953-0872-45d2-ba50-c745d0920af4@mailslurp.net`,

            // url: `https://api.mailslurp.com/emails/${inboxId}/${emailId}`,
            headers: {
              "x-api-key": API_KEY,
            },
            // failOnStatusCode: false,
          }).then((emailsResponse) => {
            cy.log("emailResponse",emailsResponse)
            const latestEmail = emailsResponse.body[0];
            if (latestEmail && latestEmail.body) {
              const emailHtmlContent = latestEmail.body;
              const linkRegex =
                /<a href="(http:\/\/localhost:3000\/auth\/email\/)">Verify Email<\/a>/;
              const linkMatch = emailHtmlContent.match(linkRegex);
              if (linkMatch && linkMatch.length > 0) {
                const verifyEmailLink = linkMatch[1]; // ตำแหน่งที่ 1 ใน linkMatch เป็น URL ที่ต้องการ
                cy.log("Verify Email Link:", verifyEmailLink);
                // คลิกลิงก์ "Verify Email" เพื่อยืนยัน
                cy.visit(verifyEmailLink);
              } else {
                cy.log("Verify Email link not found in email content.");
              }
            } else {
              cy.log("Latest email or email body not found.");
            }
          });
        } else {
          // กรณีที่ไม่มี latestEmail
          cy.log("Latest email not found.");
        }
      });
    });
  });
});


// อันนี้อีกอัน 
// const BASE_URL = "http://localhost:5173";
// import { user1 } from "../../fixtures/User.json";
// const apiKey =
//   "b1a03a68dcbc3d30c44e6ac4fa4f3139e46bc2d7c03b78163d3c5b33b5688363";

// describe("MailSlurp Example", () => {
//   it("Verify Email using MailSlurp", () => {
//     // สร้างที่อยู่อีเมลชั่วคราว
//     cy.request({
//       method: "POST",
//       url: "https://api.mailslurp.com/inboxes",
//       headers: {
//         "x-api-key": apiKey,
//       },
//     }).then((response) => {
//       const emailAddress = response.body.emailAddress;
//       // ทำบางอย่างเช่นลงทะเบียนหรือเรียกใช้งาน
//       cy.visit(BASE_URL);
//       cy.get(`.border-r-\\[\\#20476b\\]`).click();
//       cy.get("div:nth-child(1) > .relative > #username").type("username161");
//       cy.get("div:nth-child(1) > .relative > #firstName").type(
//         `${user1.firstName}`
//       );
//       cy.get("div:nth-child(1) > .relative > #lastName").type(
//         `${user1.lastName}`
//       );
//       cy.get("div:nth-child(1) > .relative > #email").type(emailAddress);
//       cy.get("div:nth-child(1) > .relative > #password").type(
//         `${user1.password}`
//       );
//       cy.get("div:nth-child(1) > .relative > #confirm_password").type(
//         `${user1.confirmPassword}`
//       );
//       cy.get("#accept-term-btn").click();
//       cy.wait(2000);
//       cy.get("div:nth-child(1) > #setup-user-submit").click();
//       cy.contains("Creating your account...").should("exist");
//       cy.wait(3000);
//       cy.contains("Created your account and Please verify your email").should(
//         "exist"
//       );
//       // รอรับอีเมล
//       cy.wait(10000);

//       // ดึงอีเมลล่าสุด
//       cy.request({
//         method: "GET",
//         url: `https://api.mailslurp.com/emails/${emailAddress}/`,
//         headers: {
//           "x-api-key": apiKey,
//         },
//         failOnStatusCode: false,
//       }).then((emailsResponse) => {
//         const latestEmail = emailsResponse.body[0];
//         if (latestEmail) {
//           const emailHtmlContent = latestEmail.body;

//           const linkRegex = /<a href="([^"]*)">Verify Email<\/a>/;
//           const linkMatch = emailHtmlContent.match(linkRegex);
//           if (linkMatch && linkMatch.length > 0) {
//             const verifyEmailLink = linkMatch[1]; // ลิงก์ "Verify Email" ที่พบ
//             cy.log("Verify Email :", verifyEmailLink);

//             // คลิกลิงก์ "Verify Email" เพื่อยืนยัน
//             cy.visit(verifyEmailLink);
//           } else {
//             cy.log("Verify Email link not found in email content.");
//           }
//         } else {
//           cy.log("Latest email not found.");
//         }
//       });
//     });
//   });
// });

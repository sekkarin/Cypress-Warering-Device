// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("verifyEmailAndExtractLink", () => {
    return cy.task("fetchEmails").then(emails => {
      // วนลูปหาอีเมล์ที่มีเรื่องเป็น "verify email"
      const verifyEmail = emails.find(email => email.subject.includes("verify email"));
      if (verifyEmail) {
        // หาลิ้งค์ในเนื้อหาของอีเมล์
        const linkRegex = /<a(?: [^>]*)? href="([^"]*)"/;
        const match = verifyEmail.body.match(linkRegex);
        if (match && match.length > 1) {
          const verificationLink = match[1];
          // ไปยังลิ้งค์ที่พบ
          cy.visit(verificationLink);
          return true;
        }
      }
      // หากไม่พบอีเมล์หรือลิ้งค์
      return false;
    });
  })
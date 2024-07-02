// Define the login function
export function login(username, password) {
  cy.visit("http://www.warering.online/home");
  cy.contains("Sign In").click();
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("#setup-user-drawer-submit").click();
  cy.screenshot();
}

// Use the login function in the test ส่วนที่เรียกใช้
// describe('Login Test', () => {
//   it('should login successfully with correct credentials', () => {
//     login('AumNatthacha', 'Natthacha2002');
//   });
// });

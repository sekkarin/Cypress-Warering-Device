describe("Admin is Active and in Active", () => {
  it("Admin is Active", () => {
    cy.visit("/Admin");
    cy.contains("User List").should("exist");
    cy.get("#.sm\\3A flex:nth-child(1) .MuiButtonBase-root").click();
    cy.contains("IN ACTIVE").should("exist");
  });
  it("Admin in Active", () => {
    cy.visit("/Admin");
    cy.contains("User List").should("exist");
    cy.get("#.sm\\3A flex:nth-child(1) .MuiButtonBase-root").click();
    cy.contains("IS ACTIVE").should("exist");
  });
});

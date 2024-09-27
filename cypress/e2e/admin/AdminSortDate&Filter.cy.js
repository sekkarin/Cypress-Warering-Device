describe("Admin SortDate&Filter", () => {
  it("Admin SortDate", () => {
    cy.visit("/Admin");
    cy.contains("Sort by Date").should("exist");
    cy.get("").click();
    cy.contains("Date").should("exist");
    cy.get("").click();
  });
  it("Admin filter",()=>{
    cy.visit("/Admin");
    cy.contains("Filter").should("exist");
    cy.get("").click();
    cy.contains("Filter").should("exist");
    cy.get("").click();
  })
});

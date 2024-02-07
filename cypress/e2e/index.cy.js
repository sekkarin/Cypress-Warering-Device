describe('template spec', () => {
    it('should open Google', () => {
        // เข้าถึง url
      cy.visit('https://www.google.com');
        // การตรวจว่าเราดึงข้อมูลจากหน้านี้หรือป่าว
      cy.title().should('include', 'Google');
    })
  })
describe('Login test',()=>{
    it( 'should log in success with valid credentials',()=>{
        
        // ใส่ path ของหน้าที่เราจะเข้าถึง
       cy.url('/singin')


        // ใส่ input ข้อมูลที่เราต้องการที่จะกรอก 
        cy.get('').type('Surapong');
        cy.get('#input-last-name').type('last-name');

        cy.get('btn-login').click();

        // เมื่อคลิกแล้วให้ไปไหนต่อ 
        // cy.url().send('')

        // Assert that the user is logged in
        cy.get('[data-testid=user-greeting]').should('contain', 'Welcome, Your Name!');
    })
        // กรณีที่ผิดพลาด 
    it('should show an error message with invalid credentials', () => {
        // Visit the login page
        cy.url('/login');
    
        // ใส่ข้อมูลที่ผิดพลาด username and password
        cy.get('#input-username').type('invalid_username');
        cy.get('#input-last-name').type('invalid_password');
    
        // คลิกที่ปุ่ม login 
        cy.get('btn-login').click();
    
        // ตรวจสอบว่ามีข้อความแสดงว่าผิดพลาดอยู่ 
        cy.get('error-message').should('contain', 'Invalid username or password');
      });
})
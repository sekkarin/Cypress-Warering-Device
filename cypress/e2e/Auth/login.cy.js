describe('Login',()=>{
    it('login to webpage success fully',()=>{
        cy.visit('https://www.saucedemo.com');

        cy.get('#user-name').type('standard_user');

        cy.get('#password').type('secret_sauce');

        cy.get('#login-button').click('');

        cy.screenshot('');
    })
    it('login to webpage with error ',()=>{
        cy.visit('https://www.saucedemo.com');

        cy.get('#user-name').type('invalid_user');

        cy.get('#password').type('secret_sauce');

        cy.get('#login-button').click();
        
        cy.screenshot();
    })
})
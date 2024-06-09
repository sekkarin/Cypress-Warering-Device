const BASE_URL= 'http://localhost:5173'
describe('Add Device', ()=>{
        // login to web 
        it("login to webpage success fully", () => {
            cy.visit(BASE_URL);
            cy.get("#toggle-big-login-landing-drawer-btn").click();
            cy.get("div:nth-child(1) > .relative > #username").type("boat");
            cy.get("div:nth-child(1) > .relative > #password").type("19092545Boat");
            cy.get("#remember-user-drawer-checkbox").click();
            cy.get("#setup-user-drawer-submit").click();
            // cy.get("h1").should("contain", "Overview");
            // cy.screenshot();
            
            cy.get("#devices-nav-link-sidebar").click("");
             cy.get("#setup-user-submit").click("");
            //  cy.get("#nameDevice").type("");
            //  cy.get("#usernameDevice").type("");
            //  cy.get("#password").type("");
            //  cy.get("description").type("");

            //  cy.get("#topics").type("");
            //  cy.get("#Qos").type("");
            //  cy.get("#retain-checkbox").click()
          });
        
})
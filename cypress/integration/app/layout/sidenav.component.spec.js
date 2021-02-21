/// <reference types="Cypress" />

context('Side Navigation Component', () => {
    beforeEach(() => {
      cy.goto('')
    });


    it('Side Navigation - Open', () => {
      cy.get('app-navbar').first().find('mat-icon').first().click();
      cy.get('app-sidenav').first().should('be.visible', {timeout: 8000});
    });

});

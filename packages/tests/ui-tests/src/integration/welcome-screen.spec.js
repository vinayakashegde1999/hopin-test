/// <reference types="cypress" />
import * as locators from '../fixtures/locators';

context('Welcome Screen', () => {
  const visitorsName = 'Vinayaka Hegde';
  it('should recieve a dialog if  customer does not enter name', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);
    cy.enterVisitorName('', false);
    cy.get(locators.welcome.submitButton)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Please provide your name');
      });
  });
  it('should take the visitor to the Customer List screen  name is entered', () => {
    cy.enterVisitorName(visitorsName);
    cy.get(locators.common.visitorIntro).should('exist').and('be.visible');
  });
  it('should the page be refreshed the user will see the default screen', () => {
    cy.refreshApp();
  });
});

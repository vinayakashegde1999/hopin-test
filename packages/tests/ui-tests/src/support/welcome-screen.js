import * as locators from '../fixtures/locators';
import * as testdata from '../fixtures/testdata';

Cypress.Commands.add('refreshApp', () => {
  cy.reload();
  cy.get(locators.welcome.nameInput)
    .should('exist')
    .and('be.visible')
    .and('have.value', '');
});

Cypress.Commands.add('enterVisitorName', (visitorsName, submit = true) => {
  cy.get(locators.common.appTitle)
    .should('be.visible')
    .contains(testdata.appTitle);

  cy.get(locators.welcome.nameLabel)
    .should('be.visible')
    .contains(testdata.welcome.introductionText);

  if (visitorsName) {
    cy.get(locators.welcome.nameInput).should('be.visible').type(visitorsName);
  }

  if (submit === true) {
    cy.get(locators.welcome.submitButton).click();
  }
});

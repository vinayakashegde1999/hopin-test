/// <reference types="cypress" />
import { database } from '../../../lib/database';
import * as locators from '../fixtures/locators';

context('Customer List Screen', () => {
  const visitorName = 'Vinayaka Hegde';
  before(() => {
    cy.enterVisitorName(visitorName);
  });
  it('should display the introduction to the visitor, containing full name & present date ', () => {
    cy.verifyIntroduction(visitorName);
  });
  it('should have all of the customers in the api response displayed in the table', () => {
    cy.verifyCustomerTableInfo(database.customers);
  });
  it('should the page be refreshed the visitor should be taken to the defualt screen ', () => {
    cy.refreshApp();
  });
});

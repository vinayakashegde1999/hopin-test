/// <reference types="cypress" />
import { database } from '../../../lib/database';
import * as locators from '../fixtures/locators';

context('Customer List Screen', () => {
  const visitorName = 'Vinayaka Hegde';
  before(() => {
    cy.enterVisitorName(visitorName);
  });
  it('should display the introduction paragraphto the visitor, containing full name & date ', () => {
    cy.assertIntroduction(visitorName);
  });
  it('should have all of the customers in the database displayed in the table', () => {
    cy.assertCustomerTableInfo(database.customers);
  });
  it('should the page be refreshed the visitor should be taken to the Welcome screen (reset)', () => {
    cy.refreshApp();
  });
});

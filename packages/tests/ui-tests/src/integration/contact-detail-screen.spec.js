/// <reference types="cypress" />
import { database } from '../../../lib/database';
import { getCustomer } from '../../../lib/utils';


context('Contacts Detail Screen', () => {
  const visitorName = 'Vinayaka Hegde';
  before(() => {
    cy.enterVisitorName(visitorName);
    cy.verifyIntroduction(visitorName);
  });
  it('should be able to see all the  customer informaiton including contact details (if applicable)', () => {
    const customerDetails = getCustomer(database.customers, 'XPTO.com')[0];
    cy.selectCustomer(customerDetails.name);
    cy.verifyCustomerDetails(customerDetails);
  });
  it('should be able to navigate between customers using the back to list button', () => {
    const customerDetails = getCustomer(database.customers, 'Bananas Corp')[0];
    cy.navigateBackToList();
    cy.selectCustomer(customerDetails.name);
    cy.verifyCustomerDetails(customerDetails);
    cy.navigateBackToList();
  });
  it("should see 'No contact info available' if customer does not have a contact set", () => {
    const customerDetails = getCustomer(database.customers, 'United Brands')[0];
    cy.selectCustomer(customerDetails.name);
    cy.verifyCustomerDetails(customerDetails);
  });
  it('should the page be refreshed the visitor is take to the default screen', () => {
    cy.refreshApp();
  });
});

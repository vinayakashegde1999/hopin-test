import * as locators from '../fixtures/locators';
import * as testdata from '../fixtures/testdata';
import { todaysDate, getCustomerSize } from '../../../lib/utils';
import { locateCustomerRow } from './dymamic-locators';

Cypress.Commands.add('assertIntroduction', (visitorsName) => {
  // Assert Introduction
  cy.get(locators.common.visitorIntro).contains(
    `Hi ${visitorsName}. It is now ${todaysDate} and here is our customer list. Click on each of them to view their contact details.`,
  );
});

Cypress.Commands.add('assertCustomerTableInfo', (customers) => {
  // Table Headers
  cy.get(locators.customerList.table.header.name)
    .should('be.visible')
    .contains(testdata.customerList.tableHeadings.name);
  cy.get(locators.customerList.table.header.employees)
    .should('be.visible')
    .contains(testdata.customerList.tableHeadings.employees);
  cy.get(locators.customerList.table.header.size)
    .should('be.visible')
    .contains(testdata.customerList.tableHeadings.size);

  // Customers in Table
  customers.map((customer) => {
    let expectedSize = getCustomerSize(customer.employees);

    cy.get(locateCustomerRow(customer.id)).within(() => {
      // Customer Name & Link
      cy.get(locators.customerList.table.data.name)
        .should('be.visible')
        .contains(customer.name);
      // # of Employees
      cy.get(locators.customerList.table.data.employees)
        .should('be.visible')
        .contains(customer.employees);
      // Size
      cy.get(locators.customerList.table.data.size)
        .should('be.visible')
        .contains(expectedSize);
    });
  });
});

Cypress.Commands.add('selectCustomer', (customerName) => {
  // Select Customer from List
  cy.get(locators.customerList.table.data.name)
    .should('be.visible')
    .contains(customerName)
    .click();

  // Assert Customer Details Loaded
  cy.get(locators.customerDetail.heading)
    .should('be.visible')
    .contains(testdata.customerDetail.heading);
});

import * as locators from '../fixtures/locators';
import * as testdata from '../fixtures/testdata';
import { todaysDate, getCustomerSize,locateCustomerRow } from '../../../lib/utils';

Cypress.Commands.add('verifyIntroduction', (visitorsName) => {
  cy.get(locators.common.visitorIntro).contains(
    `Hi ${visitorsName}. It is now ${todaysDate} and here is our customer list. Click on each of them to view their contact details.`,
  );
});

Cypress.Commands.add('verifyCustomerTableInfo', (customers) => {
  cy.get(locators.customerList.table.header.name)
    .should('be.visible')
    .contains(testdata.customerList.tableHeadings.name);
  cy.get(locators.customerList.table.header.employees)
    .should('be.visible')
    .contains(testdata.customerList.tableHeadings.employees);
  cy.get(locators.customerList.table.header.size)
    .should('be.visible')
    .contains(testdata.customerList.tableHeadings.size);

  customers.map((customer) => {
    let expectedSize = getCustomerSize(customer.employees);

    cy.get(locateCustomerRow(customer.id)).within(() => {
      cy.get(locators.customerList.table.data.name)
        .should('be.visible')
        .contains(customer.name);
      cy.get(locators.customerList.table.data.employees)
        .should('be.visible')
        .contains(customer.employees);
      cy.get(locators.customerList.table.data.size)
        .should('be.visible')
        .contains(expectedSize);
    });
  });
});

Cypress.Commands.add('selectCustomer', (customerName) => {
  cy.get(locators.customerList.table.data.name)
    .should('be.visible')
    .contains(customerName)
    .click();

  cy.get(locators.customerDetail.heading)
    .should('be.visible')
    .contains(testdata.customerDetail.heading);
});

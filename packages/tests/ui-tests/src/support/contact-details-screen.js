import * as locators from '../fixtures/locators';
import * as testdata from '../fixtures/testdata';
import { getCustomerSize } from '../../../lib/utils';

Cypress.Commands.add('verifyCustomerDetails', (customerDetails) => {
  cy.get(locators.customerDetail.heading)
    .should('be.visible')
    .contains(testdata.customerDetail.heading);

  let customerContact;
  const size = getCustomerSize(customerDetails.employees);
  const expectedMandatoryInfo = [
    [
      locators.customerDetail.name,
      testdata.customerDetail.labels.name,
      customerDetails.name,
    ],
    [
      locators.customerDetail.employees,
      testdata.customerDetail.labels.employees,
      customerDetails.employees,
    ],
    [locators.customerDetail.size, testdata.customerDetail.labels.size, size],
  ];
  expectedMandatoryInfo.map((data) => {
    const [locator, label, item] = data;
    cy.get(locator).should('be.visible').contains(`${label} ${item}`);
  });

  if (customerDetails.contactInfo) {
    customerContact = `${testdata.customerDetail.labels.contact} ${customerDetails.contactInfo.name} (${customerDetails.contactInfo.email})`;
  } else {
    customerContact = `${testdata.customerDetail.labels.contact} ${testdata.customerDetail.noContact}`;
  }
  cy.get(locators.customerDetail.contact)
    .should('be.visible')
    .contains(customerContact);
});

Cypress.Commands.add('navigateBackToList', (submit = true) => {
  cy.get(locators.customerDetail.backButton).should('be.visible').and('exist');

  if (submit) {
    cy.get(locators.customerDetail.backButton).click();
  }
});

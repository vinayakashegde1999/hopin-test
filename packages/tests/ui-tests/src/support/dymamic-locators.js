import * as locators from '../fixtures/locators';

export const locateCustomerRow = (customerId) => {
  return `[data-cy='${locators.customerList.table.data.wrapper}-${customerId}']`;
};

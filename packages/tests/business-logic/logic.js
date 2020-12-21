import { employeeSizeDetails } from '../lib/utils';

export const customerFilter = (data, expectedSize) => {
  let targetCustomers;
  if (expectedSize == 'Small') {
    targetCustomers = data.customers.filter(
      (customer) => customer.employees <= employeeSizeDetails.small.size,
    );
  }
  if (expectedSize == 'Medium') {
    targetCustomers = data.customers.filter(
      (customer) =>
        customer.employees > employeeSizeDetails.small.size &&
        customer.employees <= employeeSizeDetails.medium.size,
    );
  }
  if (expectedSize == 'Big') {
    targetCustomers = data.customers.filter(
      (customer) => customer.employees > employeeSizeDetails.big.size,
    );
  }
  return targetCustomers;
};

// Information taken from the REQUIREMENTS.md, specifically for the API
// for the reason specified here:
// https://github.com/sswales/hopin-tech-test/blob/main/testplan.md#api-vs-ui---employee-numbers-sizing
export const employeeSizeDetails = {
  small: { size: 10 },
  medium: { size: 1000 },
  big: { size: 1000 },
};

export const getCustomerSize = (numberOfEmployees) => {
  let expectedSize = '';
  if (numberOfEmployees <= employeeSizeDetails.small.size) {
    expectedSize = 'Small';
  } else if (
    numberOfEmployees > employeeSizeDetails.small.size &&
    numberOfEmployees <= employeeSizeDetails.medium.size
  ) {
    expectedSize = 'Medium';
  } else if (numberOfEmployees > employeeSizeDetails.big.size) {
    expectedSize = 'Big';
  }
  return expectedSize;
};

export const getCustomer = (data, customerName) => {
  const customer = data.filter((customer) => customer.name === customerName);
  return customer;
};

export const todaysDate = new Date().toDateString();

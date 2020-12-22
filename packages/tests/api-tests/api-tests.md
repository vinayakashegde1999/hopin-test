### API Tests with Cypress

To run the test eitehr be in the root folder or in hopin-test\packages\tests\api-tests> 
First time run yarn

yarn test:backend -> from the root folder 
OR
cypress open / cypress run from the api test folder

To visulise the cypress dashboard login to cypress dash board 
Collect the Project key and record key and replace in [package.json](https://github.com/vinayakashegde1999/hopin-test/blob/9f4790f7a03dba7d50945e243726b2ccc8477689/packages/tests/api-tests/package.json#L8)
and [cypress.json](https://github.com/vinayakashegde1999/hopin-test/blob/9f4790f7a03dba7d50945e243726b2ccc8477689/packages/tests/api-tests/cypress.json#L25)



### Folder structure 
├───api-tests                 
│   ├───cypress
│   │   ├───fixtures          
│   │   ├───integration
│   │   ├───plugins
│   │   └───support    #### index.js to support Soft assert (continue when there is a failuere also)
│   ├───node_modules
│   │   └───.bin
│   └───src
│       └───integration   ### customer-api.spec.js test cases for the API /
├───business-logic        ### abstracetd business logic to return the company size based on the employees
├───lib                   ### Pre collected data set from the response to assert agaisnt the reponse it uses like idempotent 
├───testdata              ### Common test for UI and API tests
└───ui-tests
    ├───cypress
    │   ├───fixtures
    │   ├───integration
    │   ├───plugins
    │   └───support
    ├───node_modules
    │   └───.bin
    └───src
        ├───fixtures
        ├───integration  ### Test cases for each UI Pages
        └───support

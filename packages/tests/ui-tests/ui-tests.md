###  Tests with Cypress

To run the test eitehr be in the root folder or in hopin-test\packages\tests\ui-tests> First time run yarn

yarn test:frontend -> from the root folder

OR 

cypress open / cypress run from the api test folder

To visulise the cypress dashboard login to cypress dash board Collect the Project key and record key and replace in [package.json](https://github.com/vinayakashegde1999/hopin-test/blob/f9fb590f282058faaa6c96e52ec1345c883c7770/packages/tests/ui-tests/package.json#L8) and [cypress.json](https://github.com/vinayakashegde1999/hopin-test/blob/f9fb590f282058faaa6c96e52ec1345c883c7770/packages/tests/ui-tests/cypress.json#L26)

### Folder structure
```
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
```

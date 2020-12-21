```
    Hopin's Test and Automation Challenge

```
    Requirements : 
    https://github.com/smcostareisHopin/Hopin-Exam-QE

```
Changes Done to Source code:


 Moved Source folder backend and frontend to package folder to align with Yarn
 Modifield [App.js](https://github.com/smcostareisHopin/Hopin-Exam-QE/blob/main/frontend/src/App.js) and included data-cy to the dom elements for removing dependency of copling finding elemetns to css or id's (one of the best practises from cypress e2e)
 

```
    Consideration
    

    This entire excersise is performed in windows 10 machine with Firefox,Edge chrome browsers for UI Validations
    and POSTMAN client for API validations.

    Autoamtion scripts are verified with Windows 10  Firefox,Edge chrome browsers  and in Git Actions verified with Linux and Elector browser (headless)

    There is no specific html reporter added , results can be viewed in the GitActions console/Terminal console 

    To Visualise the report, please change the ProjectId with your cypress dashbord id's so can view the results online while running tests in GithubActions. (Nice dashboard provieded by Cypress :) )

    For keeping code and framework simplicity and to make differentiate Tests in Project level.
    All tests written with Cypress both API and UI tests and maintaed separte project folder for each component.

    During writing tests considered business logic to be same for UI and API.
    (understaning / Typo issues realted to requirement but need to be clarified.) 


## Task Check list

### Task - Test env setup 
Clone the Repo - 
* [hopin-test] (https://github.com/vinayakashegde1999/hopin-test)

* From the termal run below commands in the project root folder
    * yarn -> for dependency download
    * yarn start:backend  -> to start back end coponent
    * yarn start:frontend -> to start front end coponent

![Welcome Screen Image](https://github.com/vinayakashegde1999/hopin-test/blob/main/images/Capture.PNG)


### Task- Running API Tests
Project detailed available in [API-TEST-DOC](https://github.com/vinayakashegde1999/hopin-test/tree/main/packages/tests/api-tests)

* From the termal run below commands in the project root folder
   * yarn test:backend 


### Task- Running API Tests
Project detailed available in [API-TEST-DOC](https://github.com/vinayakashegde1999/hopin-test/tree/main/packages/tests/api-tests)

* From the termal run below commands in the project root folder
   * yarn test:backend



### Task- Running UI Tests
Project detailed available in [UI-TEST-DOC](https://github.com/vinayakashegde1999/hopin-test/tree/main/packages/tests/ui-tests)

* From the termal run below commands in the project root folder
   * yarn test:frontend


 Task- Test Plan
    Requirement breakup
    1. Project Overview:
        The Customers App web application is aimed to our sales people so that they can have access to our customer's contact information.
Front pages included
| Pages | #Feature |
| :---: | :---: |
| Welcome Screen | When the user fills in his/her name and click the button, the Customer List Screen is presented.  |
|Welcome Screen |If the user clicks the button leaving the text field blank, an alert message is presented: Please provide your name.|
|Customer List Screen|if # of Employees is less than or equal 100, size is Small; if greater then 10 and less then or equal 1000, Medium; otherwise, Big|
|Customer List Screen|When the user clicks on a customer name, the Contacts Detail Screen is shown.|
|Contacts Detail Screen|This screen shows the customers detailed info (Name, # of Employees, and Size) and also the name and e-mail of the person in the company to be contacted.
|Contacts Detail Screen|When a customer doesn't have contact info, the message No contact info available should be presented.|
|Contacts Detail Screen|A Back to the list button is also presented. When it is clicked, the user is taken back to Customer List Screen.|

API  included


| Pages | #Method |Input| Expecetd Output|
| :---: | :---: | :---: | :---: |
| /|POST|"name":"name of the user"|Response should include the passed name|


* the contactInfo object is not returned when the customer doesn't have contact information in our database


* customer size is: Small, when # of employees is <= 10; Medium when it is <= 1000; Big otherwise.






    




   














    




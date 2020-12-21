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

![Welcome Screen Image](images\Capture.PNG)


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


### Task- Test Plan

#### Requirement breakup
Project Overview:
        The Customers App web application is aimed to our sales people so that they can have access to our customer's contact information.


| Pages | #Feature |
| :---: | :---: |
| Welcome Screen | When the user fills in his/her name and click the button, the Customer List Screen is presented.  |
|Welcome Screen |If the user clicks the button leaving the text field blank, an alert message is presented: Please provide your name.|
|Customer List Screen|if # of Employees is less than or equal 100, size is Small; if greater then 10 and less then or equal 1000, Medium; otherwise, Big|
|Customer List Screen|When the user clicks on a customer name, the Contacts Detail Screen is shown.|
|Contacts Detail Screen|This screen shows the customers detailed info (Name, # of Employees, and Size) and also the name and e-mail of the person in the company to be contacted.
|Contacts Detail Screen|When a customer doesn't have contact info, the message No contact info available should be presented.|
|Contacts Detail Screen|A Back to the list button is also presented. When it is clicked, the user is taken back to Customer List Screen.|


API  


| Pages | #Method |Input| Expecetd Output|
| :---: | :---: | :---: | :---: |
| /|POST|"name":"name of the user"|Response should include the passed name|


* the contactInfo object is not returned when the customer doesn't have contact information in our database


* customer size is: Small, when # of employees is <= 10; Medium when it is <= 1000; Big otherwise.

Assumption 

No characeter limitaion or length white spaces are accepted !.
For Welcome screen User already in home page , /
For Customer List Screen user sucessfully landed in the page
For Customer List Screen user sucessfully landed in the page
Contacts Detail Screen user sucessfully landed in the page


DOM Element and  Validations to be performed
 * Valdiate all  the Input box's are accesable without any limiations
 * All the buttons should be visible and easy to accessable/clicable
 * All the Links are  easy to accessable/clickable (check for broken link)
 * Validate the  the Dynamic texts - Name and Date field are apeared and  persisted correctly with Button and Link actions
 * Validate the Table hirarchy/ order is persisted when the Button and Link actions performed
 * Application should land on Welcome screen when user performs Browser navigation actions like Forward , backward or page reload,
 * At any point there should not be any errors in the consoles
 * There should be minimal calls to back end API's and should be avoided duplicate API requets performed when Back button or Click Link operations are performed



UI Test cases 

| Pages | #Scenario | Test data | Test Result| Obseravation |
| :---: | :---: | :---: |:---: |:---: |
|Welcome Screen|When user Enters the Name , And Click Submit buttion Then Page should redirect to Customer List Screen|Vinayaka Hegde,1223, Vinabyaka 12301, !@#!, `,‘ or 1=1;–., 1=1;–, |PASS | All Special characters are accepted|
|Welcome Screen|When user not entered the Name And Click Submit buttion ,Then Alert message should be pop up| |PASS | Working as expecetd |



Issues:

 Welcome Screen:
 
 Name input box accepting just a white space as name.
 Name field is not trimming white space characters

    
    Console Errors

    content.js:48 Uncaught (in promise) TypeError: this.engines is not iterable

    index.js:1406 Warning: Received `true` for a non-boolean attribute `data`.

    On Sucessfull entering username there is a netwrok call to http://localhost:3001/ with Content-Type: text/html; which returns no body result this can be reduced

    
Customer List Screen

 1.Broken Link -> When Validating Link validation for United Brands application thwroing error : TypeError: Cannot read property 'name' of undefined




API Tests

Boundry value issues:

United Brands with 20 employees should be Medium as condition for  small is <= 10 and medium is  <= 1000, but the result coming as  Small.

Caribian Airlnis with 1000 employees should be Medium as medium is <= 1000, but the result coming as  Big.   



    




   














    




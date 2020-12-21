/// <reference types="cypress"/>
describe("Make a post request to API",()=>{
    const item = {"name":"&&&&#"}


    it("validate the sucessfull api response", ()=>{
        cy.request('POST',"/",item)
        .its('body')
        .its('customers')
        .should('have.length', 6)
        
    })
})
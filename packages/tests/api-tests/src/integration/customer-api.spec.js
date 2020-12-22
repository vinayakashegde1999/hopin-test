/// <reference types="cypress"/>
import { expectedResponse, names, timestamp } from '../../../testdata/expectedResponse'
import * as  util from '../../../lib/utils'
const { softAssert, softExpect } = chai;



describe("Make a post request to API", () => {



    it("validate the sucessfull api response", () => {
        names.forEach((name) => {
            cy.request('POST', "/", name)
                .its('body')
                .should('contain', name)
                .should('contain', timestamp)
                .its('customers')
                .should('deep.equal', expectedResponse.customers)
        })

    })

    it("validate the company size based on the employee number", () => {
        cy.request('POST', "/", names).then((response) => {
            response.body.customers.forEach(element => {
                softExpect(element.size).to.eq(util.getCustomerSize(element.employees));
            })
        });


    })





})

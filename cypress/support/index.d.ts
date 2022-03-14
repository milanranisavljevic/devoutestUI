/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {

        /**
         * Get element by placeholder
         * @example
         * cy.getByPlaceholder('Article Title')
         */
        getByPlaceholder(selector: string): Chainable<any>

    }
}

declare namespace Cypress {
    interface Chainable {
        getBySel(value: string): Chainable<JQuery<HTMLElement>>
        getBySelLike(value: string): Chainable<JQuery<HTMLElement>>
        findBySel(value: string): Chainable<JQuery<HTMLElement>>
        findBySelLike(value: string): Chainable<JQuery<HTMLElement>>
    }
}
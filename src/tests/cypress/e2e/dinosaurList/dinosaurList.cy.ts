import oneDinosaurList from "../../fixtures/dinosaurList/oneDinosaurList.json" assert { type: "json" }

describe("Dinosaur list", () => {
    describe("Display all dinosaurs", () => {
        it("Display 5 dinosaurs", () => {
            cy.intercept("GET", Cypress.env("API_URL") + "/rest/v1/dinosaurs", {
                fixture: "dinosaurList/dinosaurs.json",
            })
            cy.visit("/")

            const dinosaurListEl = cy.getBySel("dinosaurList")
            const dinosaurEls = dinosaurListEl.getBySel("dinosaur")

            dinosaurEls.should("have.length", 5)
        })

        it("Display dinosaurs in alphabetical order", () => {
            cy.intercept("GET", Cypress.env("API_URL") + "/rest/v1/dinosaurs", {
                fixture: "dinosaurList/sortedDinosaurs.json",
            })
            cy.visit("/")

            const dinosaurListEl = cy.getBySel("dinosaurList")
            const dinosaurEls = dinosaurListEl.getBySel("dinosaur")

            const sortedDinosaurNames = ['a', 'a', 'a1', 'a2', 'a2', 'a3', 'b', 'b', 'c']
    
            dinosaurEls.each((dinosaurEl, index) => {
                cy.wrap(dinosaurEl).contains(sortedDinosaurNames[index], { matchCase: false })
            })
        })

        it("Display dinosaur information", () => {
            cy.intercept("GET", Cypress.env("API_URL") + "/rest/v1/dinosaurs", {
                fixture: "dinosaurList/oneDinosaurList.json",
            })
            cy.visit("/")

            const dinosaurListEl = cy.getBySel("dinosaurList")
            const dinosaurEl = dinosaurListEl.getBySel("dinosaur")

            dinosaurEl.getBySel("dinosaurImage")
                .should("have.attr", "src", oneDinosaurList[0].image_url)
                .and("have.attr", "alt")
            dinosaurEl.getBySel("dinosaurTitle").should("have.text", oneDinosaurList[0].name)
        })

        it("Go on the dinosaur details page", () => {
            cy.intercept("GET", Cypress.env("API_URL") + "/rest/v1/dinosaurs", {
                fixture: "dinosaurList/oneDinosaurList.json",
            })
            cy.visit("/")

            const dinosaurListEl = cy.getBySel("dinosaurList")
            const dinosaurEl = dinosaurListEl.getBySel("dinosaur")

            dinosaurEl.click()
            cy.url().should("include", `/dinosaurs/${oneDinosaurList[0].id}`)
        })
    })
})
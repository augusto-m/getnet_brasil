///<reference types = "cypress"/>

Cypress.Commands.add('authenticate', (usuario, senha) => {
    cy.request({
        method: 'POST',
        url: '/login',
        failOnStatusCode: false,
        body: {
                "email": usuario,
                "password": senha
        }
    })
})
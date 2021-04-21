///<reference types = "cypress"/>

const usuario = {
    email: Cypress.env('user'),
    senha: Cypress.env('password'),
    token: Cypress.env('token')
}

describe('Testar cenários de autenticação', () => {
    it('Login com sucesso', () => {
        cy.authenticate(usuario.email, usuario.senha, usuario.token)
        .then(res => {
            expect(res.body.token).to.be.exist
            expect(res.body.token).to.be.equal(usuario.token)
            expect(res.status).to.be.equal(200)
        })
    });

    it('Login com falha', () => {
        cy.authenticate('email@teste', 'testeSenha')
        .then(res => {
            expect(res.body.token).to.be.not.exist
            expect(res.status).to.be.equal(400)
        })
    });
    
});
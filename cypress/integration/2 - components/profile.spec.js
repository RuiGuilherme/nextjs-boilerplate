describe('Test Profile', () => {
	it('should render Profile component', () => {
		cy.visit('localhost:3000/')
		cy.get('#spanUser').should('exist')
		cy.get('#spanEmail').should('exist')
		cy.get('#spanPass').should('exist')
		cy.get('#btnReset').should('exist')
		cy.get('#input-name').should('exist')
		cy.get('#input-email').should('exist')
		cy.get('#input-pass').should('exist')
	})

	it('should check default values', () => {
		cy.get('#spanUser').should('have.text', 'Usuário: Usuario')
		cy.get('#spanEmail').should('have.text', 'E-mail: usuario@user.com')
		cy.get('#spanPass').should('have.text', 'Senha: aaabbbxxx')
	})

	it('should set name', () => {
		cy.get('#input-name').type('Teste')
		cy.get('#spanUser').should('have.text', 'Usuário: Teste')
	})

	it('should set email', () => {
		cy.get('#input-email').type('teste@teste.com')
		cy.get('#spanEmail').should('have.text', 'E-mail: teste@teste.com')
	})

	it('should set password', () => {
		cy.get('#input-pass').type('123456789')
		cy.get('#spanPass').should('have.text', 'Senha: 123456789')
	})

	it('should reset all values', () => {
		cy.get('#btnReset').click()
		cy.get('#spanUser').should('have.text', 'Usuário: ')
		cy.get('#spanEmail').should('have.text', 'E-mail: ')
		cy.get('#spanPass').should('have.text', 'Senha: ')
	})
})

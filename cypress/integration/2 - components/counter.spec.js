describe('Test Counter', () => {
	it('should render Counter component', () => {
		cy.visit('localhost:3000/')
		cy.get('#btnCounter').should('exist')
		cy.get('#btnAdd').should('exist')
		cy.get('#btnRemove').should('exist')
		cy.get('#input-amount').should('exist')
		cy.get('#btnSetAmount').should('exist')
	})

	it('should increment counter', () => {
		cy.get('#btnAdd').click()
		cy.get('#btnCounter').should('have.text', '1')
	})

	it('should decrement counter', () => {
		cy.get('#btnRemove').click()
		cy.get('#btnCounter').should('have.text', '0')
	})

	it('should increment counter by amount', () => {
		cy.get('#input-amount').type(10)
		cy.get('#btnSetAmount').click()
		cy.get('#btnCounter').should('have.text', '10')
	})

	it('should decrement counter by amount', () => {
		// clea input before type
		cy.get('#input-amount').clear()
		cy.get('#input-amount').type(-10)
		cy.get('#btnSetAmount').click()
		cy.get('#btnCounter').should('have.text', '0')
	})
})

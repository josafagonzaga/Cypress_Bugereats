//CAMPO WHATSAPP
Cypress.Commands.add('visivel', () => {
	Tela_Cadastro_Campos.whatsapp
		.should('be.enabled')
		.and('have.value', '');
})

Cypress.Commands.add('habilidato', () => {
	Tela_Cadastro_Campos.whatsapp
	cy.get('input[name="fullName"]')
		.should('be.enabled');
})
Cypress.Commands.add('vazio', () => {
	Tela_Cadastro_Campos.whatsapp

		.should('have.value', '');

	Tela_Cadastro_Campos.whatsapp
		.should('be.empty');

	Tela_Cadastro_Campos.whatsapp
		.type('123')

	Tela_Cadastro_Campos.whatsapp
		.clear()
		.should('be.empty')
})
Cypress.Commands.add('placeholder', () => {
	Tela_Cadastro_Campos.whatsapp
		.should('be.visible')
		.and('have.attr', 'placeholder', 'Whatsapp somente números');
})
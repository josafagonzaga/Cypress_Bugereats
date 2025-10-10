import 'cypress-wait-until';

import { tela_home, tela_cadastro_titulos, tela_cadastro_campos } from '../pages/elementos'

const Tela_Home = new tela_home
const Tela_Cadastro_Titulos = new tela_cadastro_titulos
const Tela_Cadastro_Campos = new tela_cadastro_campos

Cypress.Commands.add('visitaProjeto', () => {
	cy.visit('https://buger-eats-qa.vercel.app/')

	Tela_Home.logotipo
		.should('be.visible');

	cy.url()
		.should('be.equal', 'https://buger-eats-qa.vercel.app/');

	Tela_Home.btcadastro
		.should('be.visible')
})

Cypress.Commands.add('telaCadastro', () => {
	cy.visit('https://buger-eats-qa.vercel.app/')

	Tela_Home.botaoCadastro
		.click()

	cy.url()
		.should('be.equal', 'https://buger-eats-qa.vercel.app/deliver');
})

Cypress.Commands.add('validaLayoputPaginaHome', () => {
	//Dado que a tela home está sendo visualizada
	//Quando validar os elementos em tela
	cy.waitUntil(() =>
		cy.get('img')
			.should('be.visible')
	);

	/*Então o sistema deverá apresentar
		*Logotipo
		*Título
		*Sub-título
		*Botão
		*Background Imagem
	*/
	Tela_Home.logotipo
		.should('be.visible')
		.and('have.attr', 'alt', 'Buger Eats');

	Tela_Home.tituloPrincipal
		.should('be.visible')
		.and('have.text', 'Seja um parceiro entregador pela Buger Eats')
		.and('have.css', 'color', 'rgb(50, 33, 83)');

	Tela_Home.paragrafoDescricao
		.should('be.visible')
		.and('have.text', 'Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.')
		.and('have.css', 'color', 'rgb(108, 108, 128)');

	cy.get('[href="/deliver"]')
		.should('be.visible')
		.and('have.css', 'background-color', 'rgb(52, 203, 121)');
	cy.get('span > svg')
		.should('be.visible');
	cy.get('strong')
		.should('be.visible')
		.and('have.text', 'Cadastre-se para fazer entregas')
		.and('have.css', 'color', 'rgb(255, 255, 255)');
})

Cypress.Commands.add('validaTituloSubtitulo', () => {
	Tela_Cadastro_Titulos.tituloPrincipal
		.should('be.visible')
		.and('contain.text', 'Cadastre-se para  fazer entregas')
		.and('have.css', 'color', 'rgb(50, 33, 83)');
	Tela_Cadastro_Titulos.subtitulo1
		.should('be.visible')
		.and('contain.text', 'Dados')
		.and('have.css', 'color', 'rgb(50, 33, 83)');
	Tela_Cadastro_Titulos.subtitulo2
		.should('be.visible')
		.and('contain.text', 'Endereço')
		.and('have.css', 'color', 'rgb(50, 33, 83)');
	Tela_Cadastro_Titulos.subtitulo3
		.should('be.visible')
		.and('contain.text', 'Método de entrega')
		.and('have.css', 'color', 'rgb(50, 33, 83)');
})

//CAMPO NOME
Cypress.Commands.add('visivelNome', () => {
	Tela_Cadastro_Campos.nome
		.should('be.enabled')
		.and('have.value', '');
})
Cypress.Commands.add('habilidatoNome', () => {
	Tela_Cadastro_Campos.nome
		.should('be.enabled');
})
Cypress.Commands.add('vazioNome', () => {
	Tela_Cadastro_Campos.nome
		.should('be.enabled')
		.and('have.value', '');
})
Cypress.Commands.add('placeholderNome', () => {
	Tela_Cadastro_Campos.nome
		.should('be.visible')
		.and('have.attr', 'placeholder', 'Nome completo');

})

//CAMPO CPF
Cypress.Commands.add('visivelCPF', () => {
	Tela_Cadastro_Campos.cpf
		.should('be.enabled')
		.and('have.value', '');
})
Cypress.Commands.add('caracteristicasCPF', () => {
	Tela_Cadastro_Campos.cpf
		.should('be.visible')
		.and('have.attr', 'type', 'text')
		.and('have.attr', 'name', 'cpf')
		.and('have.attr', 'placeholder', 'CPF somente números')
		.and('have.css', 'color', 'rgb(108, 108, 128)')
		.and('be.empty')
		.and('be.enabled')
})
Cypress.Commands.add('habilidatoCPF', () => {
	Tela_Cadastro_Campos.cpf
	cy.get('input[name="fullName"]')
		.should('be.enabled');
})
Cypress.Commands.add('vazioCPF', () => {
	Tela_Cadastro_Campos.cpf

		.should('have.value', '');

	Tela_Cadastro_Campos.cpf
		.should('be.empty');

	Tela_Cadastro_Campos.cpf
		.type('123')

	Tela_Cadastro_Campos.cpf
		.clear()
		.should('be.empty')

})
Cypress.Commands.add('placeholderCPF', () => {
	Tela_Cadastro_Campos.cpf
		.should('be.visible')
		.and('have.attr', 'placeholder', 'CPF somente números');

})

//CAMPO EMAIL
Cypress.Commands.add('caracteristicasEmail', () => {
	Tela_Cadastro_Campos.email
		.should('be.visible')
		.and('have.attr', 'name', 'email')
		.and('have.attr', 'placeholder', 'E-mail')
		.and('have.css', 'color', 'rgb(108, 108, 128)')
		.and('be.empty')
		.and('be.enabled')
})
Cypress.Commands.add('foco', () => {
	//Dado estou na tela de cadastro
	//Quando verifico o campo email
	Tela_Cadastro_Campos.email
		//E coloco o mouse no campo
		.realHover()
		//Então eu valido se campo está em foco
		.and('have.css', 'border-bottom-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-left-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-right-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-top-color', 'rgb(52, 203, 121)');
})
Cypress.Commands.add('preenchimento', () => {
	Tela_Cadastro_Campos.email
	//Dado que inseri um email imvalido
		.type('12345678');

	//Quando clico no botão 'Cadastre-se para fazer entregas'
	cy.get('.button-success')
		.click();

	//Entao deve ser apresentado a mensagem 'Oops! Email com formato inválido.' logo abaixo do campo
	cy.get('.alert-error').eq(2)
		.should('have.text', 'Oops! Email com formato inválido.');
})

//CAMPO WHATSAPP
Cypress.Commands.add('visivelwhatsapp', () => {
	Tela_Cadastro_Campos.whatsapp
		.should('be.enabled')
		.and('have.value', '');
})
Cypress.Commands.add('habilidatowhatsapp', () => {
	Tela_Cadastro_Campos.whatsapp
	cy.get('input[name="fullName"]')
		.should('be.enabled');
})
Cypress.Commands.add('vaziowhatsapp', () => {
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
Cypress.Commands.add('placeholderwhatsapp', () => {
	Tela_Cadastro_Campos.whatsapp
		.should('be.visible')
		.and('have.attr', 'placeholder', 'Whatsapp somente números');
})
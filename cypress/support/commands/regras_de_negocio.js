import 'cypress-wait-until';

import { tela_home, tela_cadastro_titulos, tela_cadastro_campos } from '../pages/elementos'

const Tela_Home = new tela_home
const Tela_Cadastro_Titulos = new tela_cadastro_titulos
const Tela_Cadastro_Campos = new tela_cadastro_campos

Cypress.Commands.add('visitaProjeto', () => {

})

Cypress.Commands.add('redirecionamentoLinkCadastro', () => {
	//Dado que estou na tela home
	cy.waitUntil(() =>
		cy.url()
			.should('be.equal', 'https://buger-eats-qa.vercel.app/')
	);
	//Quando clicar no botão "Cadastre-se para fazer entregas"
	Tela_Home.btcadastro
		.click()

	//Então deverá direcionar para a tela de cadastro
	cy.url()
		.should('be.equal', 'https://buger-eats-qa.vercel.app/deliver')
})

//CAMPO NOME
Cypress.Commands.add('validacao01Nome', () => {
	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro 
	//Então eu valido se o campo está em foco

	Tela_Cadastro_Campos.nome
		.realHover()
		.and('have.css', 'border-bottom-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-left-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-right-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-top-color', 'rgb(52, 203, 121)')
})

Cypress.Commands.add('validacao02Nome', () => {
	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro 
	//Então eu valido obrigatoriedade do preenchimento do cammpo

	Tela_Cadastro_Campos.nome
		.should('be.visible')
		.and('have.value', '');
	Tela_Cadastro_Campos.btsucesso
		.click();
	cy.get('.alert-error')
		.eq(0)
		.should('be.visible')
		.and('have.text', 'É necessário informar o nome');
})

Cypress.Commands.add('validacao03Nome', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro 
	//Então eu valido se o campo aceita numeros

	Tela_Cadastro_Campos.nome
		.type('12345');
	Tela_Cadastro_Campos.btsucesso
		.click();
	Tela_Cadastro_Campos.nome
		.should('have.value', '12345');
})

Cypress.Commands.add('validacao04Nome', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro 
	//Então eu valido se o campo aceita numeros e letras

	Tela_Cadastro_Campos.nome
		.should('be.visible')
		.type('jose123d');
	Tela_Cadastro_Campos.btsucesso
		.click();
})

Cypress.Commands.add('validacao05Nome', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro 
	//Então eu valido se o campo aceita numeros, letras e caracteres especiais

	Tela_Cadastro_Campos.nome
		.should('be.visible')
		.type('jose1!@#23d');
	Tela_Cadastro_Campos.btsucesso
		.click();

})

//CAMPO CPF
Cypress.Commands.add('validacao01CPF', () => {

	//Dado estou na tela de cadastro
	//Quando verifico o campo cpf
	Tela_Cadastro_Campos.cpf
		//E coloco o mouse no campo
		.realHover()
		//Então eu valido se campo está em foco
		.and('have.css', 'border-bottom-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-left-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-right-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-top-color', 'rgb(52, 203, 121)');

})

Cypress.Commands.add('validacao02CPF', () => {


})

Cypress.Commands.add('validacao03CPF', () => {


})

Cypress.Commands.add('validacao04CPF', () => {


})
Cypress.Commands.add('validacao05CPF', () => {


})



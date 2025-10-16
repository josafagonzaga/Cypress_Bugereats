import 'cypress-wait-until';

import { tela_cadastro_campos, tela_cadastro_erro } from '../pages/elementos'

const Tela_Cadastro_Campos = new tela_cadastro_campos
const Tela_Cadastro_Erro = new tela_cadastro_erro

Cypress.Commands.add('validaFluxo01', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro 
	//Então eu valido se o campo nome esta preenchido e os campos, cpf, e-mail, cep, numero, metodo de entrega e CNH nao preenchidos

	Tela_Cadastro_Campos.nome
		.type('Jose da Silva');
	Tela_Cadastro_Campos.btsucesso
		.click();
	cy.get(':nth-child(2) > :nth-child(2) > .alert-error')
		.should('be.visible')
		.and('have.text', 'É necessário informar o CPF');
	cy.get(':nth-child(3) > :nth-child(1) > .alert-error')
		.should('be.visible')
		.and('have.text', 'É necessário informar o email');
	cy.get(':nth-child(2) > :nth-child(1) > .alert-error')
		.should('be.visible')
		.and('have.text', 'É necessário informar o CEP');
	cy.get(':nth-child(4) > :nth-child(1) > .alert-error')
		.should('be.visible')
		.and('have.text', 'É necessário informar o número do endereço');
	cy.get(':nth-child(4) > .alert-error')
		.should('be.visible')
		.and('have.text', 'Selecione o método de entrega');
	cy.get('form > :nth-child(6)')
		.should('be.visible')
		.and('have.text', 'Adicione uma foto da sua CNH');
})

Cypress.Commands.add('validaFluxo02', () => {
	//Passo - Dado estou acessando o sistema BugerEats
	//Passo - Quando estiver na tela de cadastro 
	//Passo - Então eu valido se o campo nome esta preenchido e os campos, cpf, e-mail, cep, numero, metodo de entrega e CNH nao preenchidos

	Tela_Cadastro_Campos.nome
		.type('Jose da Silva');
	Tela_Cadastro_Campos.btsucesso
	Tela_Cadastro_Campos.cpf
		.type('04330190636');
	Tela_Cadastro_Campos.btsucesso
		.click();
	cy.get('.alert-error').eq(0)
		.should('be.exist')
		.and('have.text', 'É necessário informar o email');
	cy.get('.alert-error').eq(1)
		.should('be.visible')
		.and('have.text', 'É necessário informar o CEP');
	cy.get('.alert-error').eq(2)
		.should('be.visible')
		.and('have.text', 'É necessário informar o número do endereço');
	cy.get('.alert-error').eq(3)
		.should('be.visible')
		.and('have.text', 'Selecione o método de entrega');
	cy.get('.alert-error').eq(4)
		.should('be.visible')
		.and('have.text', 'Adicione uma foto da sua CNH');
})

Cypress.Commands.add('validaFluxo03', () => {

	//Passo - Dado estou acessando o sistema BugerEats
	//Passo - Quando estiver na tela de cadastro 
	//Passo - Então eu valido se os campos estão preenchidos

	Tela_Cadastro_Campos.nome
		.type('Jose da Silva');
	Tela_Cadastro_Campos.cpf
		.type('04330190636');
	Tela_Cadastro_Campos.email
		.type('teste@gmail.com');
	Tela_Cadastro_Campos.btsucesso
		.click();
	cy.get('.alert-error').eq(0)
		.should('be.visible')
		.and('have.text', 'É necessário informar o CEP');
	cy.get('.alert-error').eq(1)
		.should('be.visible')
		.and('have.text', 'É necessário informar o número do endereço');
	cy.get('.alert-error').eq(2)
		.should('be.visible')
		.and('have.text', 'Selecione o método de entrega');
	cy.get('.alert-error').eq(3)
		.should('be.visible')
		.and('have.text', 'Adicione uma foto da sua CNH');
})

Cypress.Commands.add('validaFluxo04', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro 
	//Então eu valido se os campos estão preenchidos

	Tela_Cadastro_Campos.nome
		.type('Jose da Silva');
	Tela_Cadastro_Campos.cpf
		.type('04330190636');
	Tela_Cadastro_Campos.email
		.type('teste@gmail.com');
	Tela_Cadastro_Campos.cep
		.type('38400402');
	Tela_Cadastro_Campos.btcep
		.click();
	Tela_Cadastro_Campos.btsucesso
		.click();
	cy.get('.alert-error').eq(0)
		.should('be.visible')
		.and('have.text', 'É necessário informar o número do endereço');
	cy.get('.alert-error').eq(1)
		.should('be.visible')
		.and('have.text', 'Selecione o método de entrega');
	cy.get('.alert-error').eq(2)
		.should('be.visible')
		.and('have.text', 'Adicione uma foto da sua CNH');
})

Cypress.Commands.add('validaFluxo05', () => {

	//Passo - Dado estou acessando o sistema BugerEats
	//Passo - Quando estiver na tela de cadastro 
	//Passo - Então eu valido se os campos estão preenchidos

	Tela_Cadastro_Campos.nome
		.type('Jose da Silva');
	Tela_Cadastro_Campos.cpf
		.type('04330190636');
	Tela_Cadastro_Campos.email
		.type('teste@gmail.com');
	Tela_Cadastro_Campos.cep
		.type('38400402');
	Tela_Cadastro_Campos.btcep
		.click();
	Tela_Cadastro_Campos.numero
		.type('10');
	cy.get('.delivery-method > :nth-child(1)')
		.click();
	Tela_Cadastro_Campos.btsucesso
		.click();
	cy.get('.alert-error').eq(0)
		.should('be.visible')
		.and('have.text', 'Adicione uma foto da sua CNH');
})

Cypress.Commands.add('validaFluxo06', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro 
	//E preencher todos os dados corretamente
	//E clico no botao Cadastre-se para fazer entregas
	//Entã eu valido que deverá aparecer a mensagem de sucesso 'Ai sim'
	//E clico no botão fechar
	//E volto para paguina home

	Tela_Cadastro_Campos.nome
		.type('Jose da Silva');
	Tela_Cadastro_Campos.cpf
		.type('04330190636');
	Tela_Cadastro_Campos.email
		.type('teste@gmail.com');
	Tela_Cadastro_Campos.cep
		.type('38400402');
	Tela_Cadastro_Campos.btcep
		.click();
	Tela_Cadastro_Campos.numero
		.type('10');
	cy.get('.delivery-method > :nth-child(1)')
		.click();
	cy.get('.dropzone input[type="file"]')
		.attachFile('/' + 'cnh.jpeg')
	Tela_Cadastro_Campos.btsucesso
		.click();
	cy.get('#swal2-title')
		.should('be.visible')
		.and('have.text', 'Aí Sim...');
	cy.get('.swal2-confirm')
		.click();
	cy.url()
		.should('eq', 'https://buger-eats-qa.vercel.app/');
})
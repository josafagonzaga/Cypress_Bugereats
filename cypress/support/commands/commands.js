import 'cypress-wait-until';

import { tela_home, tela_cadastro_titulos, tela_cadastro_campos } from '../pages/elementos'

const Tela_Home = new tela_home
const Tela_Cadastro_Titulos = new tela_cadastro_titulos
const Tela_Cadastro_Campos = new tela_cadastro_campos

Cypress.Commands.add('visitaProjeto', () => {
	cy.visit('https://buger-eats-qa.vercel.app/')

	Tela_Home.logotipo
		.should('be.visible')
		//.and('be.equal', 'https://buger-eats-qa.vercel.app/');
})

Cypress.Commands.add('telaCadastro', () => {
	cy.visit('https://buger-eats-qa.vercel.app/')

	Tela_Home.botaoCadastro
		.click()

	cy.url()
		.should('be.equal', 'https://buger-eats-qa.vercel.app/deliver');
})

Cypress.Commands.add('telahome', () => {
	cy.visit('https://buger-eats-qa.vercel.app/')
})

Cypress.Commands.add('validaLayoputPaginaHome', () => {
	//Dado que a tela home está sendo visualizada
	//Quando validar os elementos em tela
	cy.visit('https://buger-eats-qa.vercel.app/')

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
Cypress.Commands.add('caracteristicas_Nome', () => {
	Tela_Cadastro_Campos.nome
		.should('be.enabled')
		.and('have.value', '')
		.and('have.value', '')
		.and('have.attr', 'placeholder', 'Nome completo');
})

//CAMPO CPF
Cypress.Commands.add('caracteristicas_CPF', () => {
	Tela_Cadastro_Campos.cpf
		.should('be.visible')
		.and('have.attr', 'type', 'text')
		.and('have.attr', 'name', 'cpf')
		.and('have.attr', 'placeholder', 'CPF somente números')
		.and('have.css', 'color', 'rgb(108, 108, 128)')
		.and('be.empty')
		.and('be.enabled')
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
Cypress.Commands.add('caracteristicas_Whatsapp', () => {
	Tela_Cadastro_Campos.whatsapp
		.should('be.enabled')
		.and('have.value', '')
		.and('be.empty')
		.and('have.attr', 'placeholder', 'Whatsapp');
})

//CAMPO CEP
Cypress.Commands.add('caracteristicas_CEP', () => {
	Tela_Cadastro_Campos.cep
		.should('be.enabled')
		.and('have.value', '')
		.and('be.empty')
		.and('have.attr', 'placeholder', 'CEP');
})
//CAMPO BT CEP
Cypress.Commands.add('caracteristicas_Bt_CEP', () => {
	Tela_Cadastro_Campos.btcep
		.should('be.enabled')
		.and('have.value', 'Buscar CEP')
		.and('have.attr', 'type', 'button');
})

//CAMPO RUA
Cypress.Commands.add('caracteristicas_rua', () => {
	Tela_Cadastro_Campos.rua
		.should('be.visible')
		.and('be.disabled')
		.and('have.attr', 'placeholder', 'Rua');
})

//CAMPO NUMERO
Cypress.Commands.add('caracteristicas_Numero', () => {
	Tela_Cadastro_Campos.numero
		.should('be.visible')
		.and('be.enabled')
		.and('have.value', '')
		.and('have.attr', 'placeholder', 'Número');
})

//CAMPO COMPLEMENTO
Cypress.Commands.add('caracteristicas_Complemento', () => {
	Tela_Cadastro_Campos.complemento
		.should('be.visible')
		.and('be.enabled')
		.and('have.value', '')
		.and('have.attr', 'placeholder', 'Complemento');
})

//CAMPO BAIRRO
Cypress.Commands.add('caracteristicas_Bairro', () => {
	Tela_Cadastro_Campos.bairro
		.should('be.visible')
		.and('be.disabled')
		.and('have.value', '')
		.and('have.attr', 'placeholder', 'Bairro');
})
//CAMPO CIDADE
Cypress.Commands.add('caracteristicas_Cidade', () => {
	Tela_Cadastro_Campos.cidade
		.should('be.visible')
		.and('be.disabled')
		.and('have.value', '')
		.and('have.attr', 'placeholder', 'Cidade/UF');
})

//CAMPO METODO DE ENTREGA
Cypress.Commands.add('caracteristicas_CampoMetodoDeEntrega', () => {
	Tela_Cadastro_Campos.metodoentrega
		.should('be.visible')
		.and('have.text', 'Método de entrega')
	Tela_Cadastro_Campos.escolhametodo
		.should('be.visible')
		.and('contain', 'Escolha um dos métodos abaixo')

	Tela_Cadastro_Campos.img1
		.should('be.visible')
		.and('have.attr', 'src')
		.and('include', '/moto');
	Tela_Cadastro_Campos.img2
		.should('be.visible')
		.and('have.attr', 'src')
		.and('include', '/bike');
	Tela_Cadastro_Campos.img3
		.should('be.visible')
		.and('have.attr', 'src')
		.and('include', '/van');

	Tela_Cadastro_Campos.acessibilidade.then(($imgs) => {
		expect($imgs[0]).to.have.attr('alt', 'Moto')
		expect($imgs[1]).to.have.attr('alt', 'Bike Elétrica')
		expect($imgs[2]).to.have.attr('alt', 'Van/Carro')
	});
})

//CAMPO CNH
Cypress.Commands.add('carregar_CNH', () => {

	Tela_Cadastro_Campos.cnh01
		.should('be.visible')
		.and('have.attr', 'tabindex', '0')
		.and('contain.text', 'Foto da sua CNH')
		.and('exist');
	Tela_Cadastro_Campos.cnh02
		.should('exist')
		.and('have.attr', 'accept', 'image/*')
		.and('have.attr', 'type', 'file')
		.and('have.css', 'display', 'none');
})




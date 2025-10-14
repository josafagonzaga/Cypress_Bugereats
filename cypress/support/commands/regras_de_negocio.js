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






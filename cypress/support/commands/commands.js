import 'cypress-wait-until';

import { tela_home } from '../pages/elementos'

const Tela_Home = new tela_home

Cypress.Commands.add('visitaProjeto',() => {
    cy.visit('https://buger-eats-qa.vercel.app/')

    Tela_Home.logotipo
        .should('be.visible');
    
    cy.url()
		.should('be.equal', 'https://buger-eats-qa.vercel.app/');

    Tela_Home.btcadastro
    .should('be.visible')
})


Cypress.Commands.add('validaLayoputPaginaHome',() => {
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
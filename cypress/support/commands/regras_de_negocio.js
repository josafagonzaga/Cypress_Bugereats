import 'cypress-wait-until';

import { tela_home, tela_cadastro_titulos, tela_cadastro_campos, tela_cadastr0_erro, tela_cadastro_erro } from '../pages/elementos'

const Tela_Home = new tela_home
const Tela_Cadastro_Titulos = new tela_cadastro_titulos
const Tela_Cadastro_Campos = new tela_cadastro_campos
const Tela_Cadastro_Erro = new tela_cadastro_erro

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
	Tela_Cadastro_Erro.erro01
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

	//Dado que inseri um cpf imvalido
	Tela_Cadastro_Campos.cpf
		.type('12345678');

	//Quando clico no botão 'Cadastre-se para fazer entregas'
	Tela_Cadastro_Campos.btsucesso
		.click();

	//Entao deve ser apresentado a mensagem 'Oops! CPF inválido' logo abaixo do campo
	Tela_Cadastro_Erro.erro02
		.should('have.text', 'Oops! CPF inválido');
})

Cypress.Commands.add('validacao03CPF', () => {

	//Dado estou na tela de cadastro
	//Quando verifico o campo cpf
	Tela_Cadastro_Campos.cpf
		//E digito um cpf invalido
		.type('89088525064');
	//E clico no botão 'Cadastre-se para fazer entregas'
	Tela_Cadastro_Campos.btsucesso
		.click();
	//Entao o campo deve ser apresentado sem nenhuma mensagem de erro abaixo
	Tela_Cadastro_Campos.cpf
		.parent()
		.find('.alert-error')
		.should('not.exist')
	//E deve estar preenchido com o nome valido digitado
	Tela_Cadastro_Campos.cpf
		.and('have.value', '89088525064')
})

Cypress.Commands.add('validacao04CPF', () => {

	//Dado estou na tela de cadastro
	//Quando verifico o campo cpf
	Tela_Cadastro_Campos.cpf
		//E digito um cpf invalido contendo caracteres especiais e numeros
		.type('!@#12345678');
	//E clico no botão 'Cadastre-se para fazer entregas'
	Tela_Cadastro_Campos.btsucesso
		.click();
	//Entao deve ser apresentado a mensagem 'Oops! CPF inválido' logo abaixo do campo
	Tela_Cadastro_Erro.erro02
		.should('have.text', 'Oops! CPF inválido');
})
Cypress.Commands.add('validacao05CPF', () => {

	//Dado estou na tela de cadastro
	//Quando verifico o campo cpf
	Tela_Cadastro_Campos.cpf
		//E digito um cpf invalido contendo numeros e letras
		.type('ads12345678');
	//E clico no botão 'Cadastre-se para fazer entregas'
	Tela_Cadastro_Campos.btsucesso
		.click();
	//Entao deve ser apresentado a mensagem 'Oops! CPF inválido' logo abaixo do campo
	Tela_Cadastro_Erro.erro02
		.should('have.text', 'Oops! CPF inválido');
})
Cypress.Commands.add('validacao06CPF', () => {

	//Dado estou na tela de cadastro
	//Quando verifico o campo cpf
	Tela_Cadastro_Campos.cpf
		//E digito um cpf invalido contendo abaixo de 11 caracteres
		.type('1234567898');
	//E clico no botão 'Cadastre-se para fazer entregas'
	Tela_Cadastro_Campos.btsucesso
		.click();
	//Entao deve ser apresentado a mensagem 'Oops! CPF inválido' logo abaixo do campo
	Tela_Cadastro_Erro.erro02
		.should('have.text', 'Oops! CPF inválido');
})
Cypress.Commands.add('validacao07CPF', () => {

	//Dado estou na tela de cadastro
	//Quando verifico o campo cpf
	Tela_Cadastro_Campos.cpf
		//E digito um cpf invalido contendo acima de 11 caracteres
		.type('123456789876');
	//E clico no botão 'Cadastre-se para fazer entregas'
	Tela_Cadastro_Campos.btsucesso
		.click();
	//Entao deve ser apresentado a mensagem 'Oops! CPF inválido' logo abaixo do campo
	Tela_Cadastro_Erro.erro02
		.should('have.text', 'Oops! CPF inválido');
})
Cypress.Commands.add('validacao08CPF', () => {

	//Dado estou na tela de cadastro
	//Quando verifico o campo cpf
	Tela_Cadastro_Campos.cpf
		//E digito um cpf invalido contendo caracteres iguais
		.type('11111111111');
	//E clico no botão 'Cadastre-se para fazer entregas'
	Tela_Cadastro_Campos.btsucesso
		.click();
	//Entao deve ser apresentado a mensagem 'Oops! CPF inválido' logo abaixo do campo
	Tela_Cadastro_Erro.erro02
		.should('have.text', 'Oops! CPF inválido');
})
Cypress.Commands.add('validacao09CPF', () => {

	//Dado estou na tela de cadastro
	//Quando verifico o campo cpf
	Tela_Cadastro_Campos.cpf
		//E digito um cpf valido contendo pontos e digito
		.type('890.885.250-64');
	//E clico no botão 'Cadastre-se para fazer entregas'
	Tela_Cadastro_Campos.btsucesso
		.click();
	//Entao deve ser apresentado a mensagem 'Oops! CPF inválido' logo abaixo do campo
	Tela_Cadastro_Erro.erro02
		.should('have.text', 'Oops! CPF inválido');
})
Cypress.Commands.add('validacao10CPF', () => {

	//Dado estou na tela de cadastro
	//Quando verifico o campo cpf
	Tela_Cadastro_Campos.cpf
		//E digito um cpf válido e o restantes dos campos em branco
		.type('89088525064');
	//E clico no botao Cadastre-se para fazer entregas
	Tela_Cadastro_Campos.btsucesso
		.click();
	//Entao deve ser apresentado os erros para preencher os campos vazios						
	Tela_Cadastro_Erro.erro01
		.should('be.visible')
		.and('have.text', 'É necessário informar o nome');
	Tela_Cadastro_Erro.erro02
		.should('be.visible')
		.and('have.text', 'É necessário informar o email');
	Tela_Cadastro_Erro.erro03
		.should('be.visible')
		.and('have.text', 'É necessário informar o CEP');
	Tela_Cadastro_Erro.erro04
		.should('be.visible')
		.and('have.text', 'É necessário informar o número do endereço');
	Tela_Cadastro_Erro.erro05
		.should('be.visible')
		.and('have.text', 'Selecione o método de entrega');
	Tela_Cadastro_Erro.erro06
		.should('be.visible')
		.and('have.text', 'Adicione uma foto da sua CNH');
})

//CAMPO EMAIL
Cypress.Commands.add('validacao01Email', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro 
	//Então eu valido se o campo está em foco

	Tela_Cadastro_Campos.email
		.realHover()
		.and('have.css', 'border-bottom-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-left-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-right-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-top-color', 'rgb(52, 203, 121)')
})

Cypress.Commands.add('validacao02Email', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro 
	//Então eu valido se o campo aceita numeros

	Tela_Cadastro_Campos.email
		.type('12345');
	Tela_Cadastro_Campos.btsucesso
		.click();
	Tela_Cadastro_Campos.email
		.should('have.value', '12345');
})

Cypress.Commands.add('validacao03Email', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro 
	//Então eu valido se o campo aceita numeros e letras

	Tela_Cadastro_Campos.email
		.should('be.visible')
		.type('jose123d');
	Tela_Cadastro_Campos.btsucesso
		.click();
})

Cypress.Commands.add('validacao04Email', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro 
	//Então eu valido se o campo aceita numeros, letras e caracteres especiais

	Tela_Cadastro_Campos.email
		.should('be.visible')
		.type('jose1!@#23d');
	Tela_Cadastro_Campos.btsucesso
		.click();
})

//CAMPO WHATSAPP
Cypress.Commands.add('validacao01Whatsapp', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro 
	//Então eu valido se o campo está em foco

	Tela_Cadastro_Campos.whatsapp
		.realHover()
		.and('have.css', 'border-bottom-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-left-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-right-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-top-color', 'rgb(52, 203, 121)')
})

Cypress.Commands.add('validacao02Whatsapp', () => {
	//começar aqui
})

Cypress.Commands.add('validacao03Whatsapp', () => {

})

Cypress.Commands.add('validacao04Whatsapp', () => {

})

Cypress.Commands.add('validacao04Whatsapp', () => {

})

Cypress.Commands.add('validacao05Whatsapp', () => {

})
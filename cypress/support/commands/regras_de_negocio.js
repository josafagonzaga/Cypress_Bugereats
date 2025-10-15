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
	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro 
	//Então eu valido se o campo aceita numeros

	Tela_Cadastro_Campos.whatsapp
		.type('adfr');
	Tela_Cadastro_Campos.btsucesso
		.click();
	Tela_Cadastro_Campos.whatsapp
		.should('have.value', 'adfr');
	Tela_Cadastro_Erro.erro04
		.should('be.visible')
		.and('have.text', 'Oops! Whatsapp com formato incorreto')
})

Cypress.Commands.add('validacao03Whatsapp', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro 
	//Então eu valido formato correto

	Tela_Cadastro_Campos.whatsapp
		.type('349882219');
	Tela_Cadastro_Campos.btsucesso
		.click();
	Tela_Cadastro_Campos.whatsapp
		.should('have.value', '349882219');
	Tela_Cadastro_Erro.erro04
		.should('be.visible')
		.and('have.text', 'Oops! Whatsapp com formato incorreto')
})

//CAMPO CEP
Cypress.Commands.add('validacao01CEP', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro 
	//Então eu valido se o campo está em foco

	Tela_Cadastro_Campos.cep
		.realHover()
		.and('have.css', 'border-bottom-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-left-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-right-color', 'rgb(52, 203, 121)')
		.and('have.css', 'border-top-color', 'rgb(52, 203, 121)')
})

Cypress.Commands.add('validacao02CEP', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro
	//E digitar um cep valido
	//E clico no botao "buscar cep"
	//Então é apresentado a mensagem "Informe um CEP valido"

	Tela_Cadastro_Campos.cep
		.type('38400');
	Tela_Cadastro_Campos.btcep
		.click();
	Tela_Cadastro_Erro.erro01
		.should('be.visible')
		.and('have.text', 'Informe um CEP válido')
})

Cypress.Commands.add('validacao03CEP', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro
	//E digitar um cep valido
	//E clico no botao "buscar cep"
	//Então os campos Rua, Bairro e Cidade devem ser preenchidos automaticamente
	Tela_Cadastro_Campos.cep
		.type('38400402');
	Tela_Cadastro_Campos.btcep
		.click();
	Tela_Cadastro_Campos.rua
		.should('have.value', 'Rua Alfredo Júlio')
	Tela_Cadastro_Campos.bairro
		.should('have.value', 'Osvaldo Rezende')
	Tela_Cadastro_Campos.cidade
		.should('have.value', 'Uberlândia/MG')
})

Cypress.Commands.add('validacao04CEP', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro
	//E digitar um cep valido
	//E clico no botao "buscar cep"
	//Então é apresentado a mensagem "Informe um CEP valido"

	Tela_Cadastro_Campos.btcep
		.click();
	Tela_Cadastro_Erro.erro01
		.and('have.text', 'Informe um CEP válido')

})

Cypress.Commands.add('validacao05CEP', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro
	//E digitar um cep invalido, deve aparecer o erro informando cep invalido
	//Entao clico no botao "buscar cep"
	//E o erro deve desaparecer

	Tela_Cadastro_Campos.cep
		.type('394000')
	Tela_Cadastro_Campos.btcep
		.click();
	Tela_Cadastro_Erro.erro01
		.and('have.text', 'Informe um CEP válido')

	Tela_Cadastro_Campos.cep
		.clear()
		.type('38400402')
	Tela_Cadastro_Campos.btcep
		.click();
	cy.get('.alert-error', { timeout: 10000 }).should('not.exist')

})

//METODO DE ENTREGA
Cypress.Commands.add('validacao01Entrega', () => {

	Tela_Cadastro_Campos.btsucesso
		.click();
	Tela_Cadastro_Campos.metodoentrega
		.each(($el) => {
			cy.wrap($el).should('not.have.class', 'selected')
		})
	Tela_Cadastro_Erro.erro06
		.should('have.text', 'Selecione o método de entrega');
})

Cypress.Commands.add('validacao02Entrega', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro
	//E seleciono o metodo de entrega
	//Então o objeto devera ficar selecionado, com a borda verde

	cy.get('.delivery-method li').each(($item, index) => {
		cy.wrap($item)
			.click()
			.should('have.class', 'selected')
			.and('have.css', 'border-top-color', 'rgb(52, 203, 121)')
	})
})

//CNH
Cypress.Commands.add('validacao01CNH', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro
	//E clico no campo "Foto da sua cnh"
	//Então a foto deverá ser enviada para a aplicação

	cy.get('.dropzone input[type="file"]')
		.selectFile('cypress/support/img/cnh.jpeg', { force: true })
})

Cypress.Commands.add('validacao02CNH', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro
	//E clico no campo "Foto da sua cnh"
	//Então a foto deverá ser enviada para a aplicação

	cy.get('.dropzone input[type="file"]')
		.attachFile('/' + 'cnh.jpeg')
})

Cypress.Commands.add('validacao03CNH', () => {

	//Dado estou acessando o sistema BugerEats
	//Quando estiver na tela de cadastro
	// E faço o upload da imagem
	//Então a foto deverá estar visível no campo
	cy.get('.dropzone input[type="file"]')
		.selectFile('cypress/support/img/cnh.jpeg', { force: true });
	cy.get('.dropzone img')
		.should('have.attr', 'src');
})

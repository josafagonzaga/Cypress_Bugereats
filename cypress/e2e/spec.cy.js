context('Projeto - Buger Eats', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context('Tela Home', () => 
	{
		context(`${contexto} - Critérios de aceite.`, () => 
		{
			let complemento = 1;
			describe(`${cenario} - Validações Visuais.`, () => 
			{
				beforeEach(() => {
					cy.visitaProjeto();
				});

				afterEach(() => {
					cy.clearAllLocalStorage();
					cy.clearAllCookies();
					cy.clearAllSessionStorage();
				});

				
				it(`${teste}.${complemento} - Valida layout.`, () => 
				{
					cy.validaLayoputPaginaHome()
				});
			});
		});
	});

	context('Tela Cadastro', () => 
	{
		context(`${contexto} - Critérios de aceite.`, () => 
		{
			let complemento = 1;
			describe(`${cenario} - Validações Visuais.`, () => 
			{
				beforeEach(() => {
					cy.telaCadastro()
				});

				afterEach(() => {
					cy.clearAllLocalStorage();
					cy.clearAllCookies();
					cy.clearAllSessionStorage();
				});

				describe('Título', () =>
				{
					it(`${teste}.${complemento} - Validar "título e subtitulos"`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido o titulo e sub-titulos
						cy.validaTituloSubtitulo()
					});
				});

				describe('Campo Nome', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar caracteristicas do campo nome`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do campo
						cy.caracteristicas_Nome()
					});
				});

				describe('Campo CPF', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar caracteristicas do campo CPF`, () =>
					{
						//Dado que estou logado no sistema Bugger eat
						//Quando estiver na tela de cadastro 
						//Então eu valido se campo está visível
						cy.caracteristicas_CPF()
					});
				});

				describe('Campo email', () =>
				{
					complemento = 1;
					
					it(`${++teste}.${complemento} - Validar caracteristicas do campo email`, () =>
					{
						//Dado que estou logado no sistema Bugger eat
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do campo email
						cy.caracteristicasEmail()
					})
				});

				describe('Campo whatsapp', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar caracteristicas do campo Whatsapp`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristiscas do campo
						cy.caracteristicas_Whatsapp()
					});
				});

				describe('Campo cep', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar caracteristicas do campo CEP`, () =>
					{
						cy.caracteristicas_CEP()
					});
				});

				describe('Botao cep', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar caracteristicas do botao cep`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do botao cep
						cy.caracteristicas_Bt_CEP()
					});
				});

				describe('Campo rua', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar as caracteristicas do campo "rua"`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do campo rua
						cy.caracteristicas_rua()
					});
				});

				describe('Campo numero', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar as caracteristicas do campo "numero"`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do campo
						cy.caracteristicas_Numero()
					});
				});

				describe('Campo complemento', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar as caracteristicas do campo "complemento"`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do campo
						cy.caracteristicas_Complemento()
					});
				});

				describe('Campo bairro', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar caracteristicas do campo "bairro"`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do campo
						cy.caracteristicas_Bairro()
					});
				});

				describe('Campo Cidade-UF', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar caracteristicas do campo "cidade"`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do campo
						cy.caracteristicas_Cidade()
					});
				});

				describe('Método de entrega', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar caracteristica do campo "Metodo de entrega"`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do campo
						cy.caracteristicas_CampoMetodoDeEntrega()
						cy.carregar_CNH()
					});
				});
			});
		});
	});
});


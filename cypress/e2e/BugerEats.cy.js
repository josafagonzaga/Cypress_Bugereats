context('Projeto - Buger Eats', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context.skip('Tela Home', () => 
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

		context(`${++contexto} - Regras de negócio.`, () => 
		{
			let complemento = 1;
			describe(`${++cenario} - Validações Comportamentais.`, () => 
			{
				beforeEach(() => {
					cy.telahome()
				});

				afterEach(() => {
					cy.clearAllLocalStorage();
					cy.clearAllCookies();
					cy.clearAllSessionStorage();
				});

				describe('Link "Cadastre-se para fazer entregas"', () => 
				{
					it(`${++teste}.${complemento} - Validar redirecionamento do link.`, () => 
					{
						cy.redirecionamentoLinkCadastro()
					});
				});
			});
		});
	});



	context('Tela Cadastro', () => 
	{
		context.skip(`${contexto} - Critérios de aceite.`, () => 
		{
			let complemento = 1;
			
			describe(`${++cenario} - Validações Visuais.`, () => 
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
					it(`${++teste}.${complemento} - Validar "título e subtitulos"`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido o titulo e sub-titulos
						cy.validaTituloSubtitulo()
					});
				});

				describe('Campo Nome', () =>
				{
					//complemento = 1;
					it(`${teste}.${++complemento} - Validar caracteristicas do campo nome`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do campo
						cy.caracteristicas_Nome()
					});
				});

				describe('Campo CPF', () =>
				{
					it(`${teste}.${++complemento} - Validar caracteristicas do campo CPF`, () =>
					{
						//Dado que estou logado no sistema Bugger eat
						//Quando estiver na tela de cadastro 
						//Então eu valido se campo está visível
						cy.caracteristicas_CPF()
					});
				});

				describe('Campo email', () =>
				{
					it(`${teste}.${++complemento} - Validar caracteristicas do campo email`, () =>
					{
						//Dado que estou logado no sistema Bugger eat
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do campo email
						cy.caracteristicasEmail()
					})
				});

				describe('Campo whatsapp', () =>
				{
					it(`${teste}.${++complemento} - Validar caracteristicas do campo Whatsapp`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristiscas do campo
						cy.caracteristicas_Whatsapp()
					});
				});

				describe('Campo cep', () =>
				{
					it(`${teste}.${++complemento} - Validar caracteristicas do campo CEP`, () =>
					{
						cy.caracteristicas_CEP()
					});
				});

				describe('Botao cep', () =>
				{
					it(`${teste}.${++complemento} - Validar caracteristicas do botao cep`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do botao cep
						cy.caracteristicas_Bt_CEP()
					});
				});

				describe('Campo rua', () =>
				{
					it(`${teste}.${++complemento} - Validar as caracteristicas do campo "rua"`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do campo rua
						cy.caracteristicas_rua()
					});
				});

				describe('Campo numero', () =>
				{
					it(`${teste}.${++complemento} - Validar as caracteristicas do campo "numero"`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do campo
						cy.caracteristicas_Numero()
					});
				});

				describe('Campo complemento', () =>
				{
					it(`${teste}.${++complemento} - Validar as caracteristicas do campo "complemento"`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do campo
						cy.caracteristicas_Complemento()
					});
				});

				describe('Campo bairro', () =>
				{
					it(`${teste}.${++complemento} - Validar caracteristicas do campo "bairro"`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do campo
						cy.caracteristicas_Bairro()
					});
				});

				describe('Campo Cidade-UF', () =>
				{
					it(`${teste}.${++complemento} - Validar caracteristicas do campo "cidade"`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido as caracteristicas do campo
						cy.caracteristicas_Cidade()
					});
				});

				describe('Método de entrega', () =>
				{
					it(`${teste}.${++complemento} - Validar caracteristica do campo "Metodo de entrega"`, () =>
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

		//refatorando a partir daqui

		context(`${++contexto} - Regras de negócio.`, () => 
		{
			let complemento = 1;
			describe(`${++cenario} - Validações Comportamentais.`, () => 
			{
				beforeEach(() => {
					cy.telaCadastro()
				});

				afterEach(() => {
					cy.clearAllLocalStorage();
					cy.clearAllCookies();
					cy.clearAllSessionStorage();
				});

				describe('Campo Nome', () =>
				{
					it(`${teste}.${++complemento} - Validar se o campo "nome" está em foco`, () =>
					{
						cy.validacao01Nome()
					})

					it(`${teste}.${++complemento} - Validar que o campo "nome" deve estar preenchido pra prosseguir com o cadastro`, () =>
					{
						cy.validacao02Nome()
					})

					it(`${teste}.${++complemento} - Validar se o campo "nome" aceita numeros`, () =>
					{
						cy.validacao03Nome()		
					})

					it(`${teste}.${++complemento} - Validar se o campo "nome" aceita numeros e letras`, () =>
					{
						cy.validacao04Nome()
					})

					it(`${teste}.${++complemento} - Validar se o campo "nome" aceita numeros, letras e caracteres especiais`, () =>
					{
						cy.validacao05Nome()
					})
				});

				describe('Campo CPF', () =>
				{
					it(`${teste}.${++complemento} - Validar se o campo "cpf" está em foco`, () =>
					{
						cy.validacao01CPF()
					})

					it(`${teste}.${++complemento} - Validar que o campo "cpf" foi preenchido com um cpf inválido`, () =>
					{
						cy.validacao02CPF()
					})

					it(`${teste}.${++complemento} - Validar que o campo "cpf" foi preenchido com um cpf válido`, () =>
					{
						cy.validacao03CPF()
					})
					
					it(`${teste}.${++complemento} - Validar se o campo "cpf" aceita numeros e caracteres especiais`, () =>
					{
						cy.validacao04CPF()		
					})

					it(`${teste}.${++complemento} - Validar se o campo "cpf" aceita numeros e letras`, () =>
					{
						cy.validacao05CPF()
					})

					it(`${teste}.${++complemento} - Validar se o campo "cpf" aceita quantidade abaixo de 11 caracteres`, () =>
					{
						cy.validacao06CPF()
					})

					it(`${teste}.${++complemento} - Validar se o campo "cpf" aceita quantidade de acima de 11 caracteres`, () =>
					{
						cy.validacao07CPF()
					})

					it(`${teste}.${++complemento} - Validar se o campo "cpf" aceita todos os caracteres iguais`, () =>
					{
						cy.validacao08CPF()
					})

					it(`${teste}.${++complemento} - Validar se o campo "cpf" aceita a mascara de CPF no padrao com ponstos e digito`, () =>
					{
						cy.validacao09CPF()
					})

					it(`${teste}.${++complemento} - Validar campo cpf preenchido e os campos, nome, e-mail, cep, numero, metodo de entrega e CNH nao preenchidos`, () =>
					{
						cy.validacao10CPF()
					})
				});

				describe('Campo Email', () =>
				{
					it(`${teste}.${++complemento} - Validar se o campo "email" está em foco`, () =>
					{
						cy.validacao01Email()
					})

					it(`${teste}.${++complemento} - Validar se o campo "email" aceita numeros`, () =>
					{
						cy.validacao02Email()
					})

					it(`${teste}.${++complemento} - Validar se o campo "email" aceita numeros e letras`, () =>
					{
						cy.validacao03Email()
					})

					it(`${teste}.${++complemento} - Validar se o campo "email" aceita numeros, letras e caracteres especiais`, () =>
					{
						cy.validacao04Email()
					})
				});

				describe('Campo whatsapp', () =>
				{
					it(`${teste}.${++complemento} - Validar se o campo "whatsapp" está em foco`, () =>
					{
						cy.validacao01Whatsapp()
					})

					it(`${teste}.${++complemento} - Validar se o campo "whatsapp" aceita somente numeros`, () =>
					{
						cy.validacao02Whatsapp()
					})

					it(`${teste}.${++complemento} - Validar se o campo "whatsapp" possui formato correto`, () =>
					{
						cy.validacao03Whatsapp()
					})
				});

				describe('Campo CEP', () =>
				{
					it(`${teste}.${++complemento} - Validar se o campo "CEP" está em foco`, () =>
					{
						cy.validacao01CEP()
					})

					it(`${teste}.${++complemento} - Validar cep invalido`, () =>
					{
						cy.validacao02CEP()
					})

					it(`${teste}.${++complemento} - Validar cep válido`, () =>
					{
						cy.validacao03CEP()
					})

					it(`${teste}.${++complemento} - Validar cep inválido`, () =>
					{
						cy.validacao04CEP()		
					})

					it(`${teste}.${++complemento} - Erro some após digitar cep válido`, () =>
					{
						cy.validacao05CEP()
					})
				});

				describe('Campo Metodo de entrega', () =>
				{
					it(`${teste}.${++complemento} - Validar obrigatorietade na seleção de metodo de entrega `, () =>
					{
						cy.validacao01Entrega()
					})
					
					it(`${teste}.${++complemento} - Validar objetos selecionados `, () =>
					{
						cy.validacao02Entrega()
					})
				});

				describe('Campo CNH', () =>
				{
					
					it(`${teste}.${++complemento} - Validar seleção de imagem correta`, () =>
					{
						cy.validacao01CNH()
					})

					it(`${teste}.${++complemento} - Validar o upload de uma imagem`, () =>
					{
						cy.validacao02CNH()
					})

					it(`${teste}.${++complemento} - Validar se após o upload a imagem aparece na tela`, () =>
					{
						cy.validacao03CNH()
					})
				});
			});
		});
	});
});


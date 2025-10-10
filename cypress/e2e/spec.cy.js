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
					it(`${++teste}.${complemento} - Validar se o campo "nome" está visível`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido se campo está visível
						cy.visivelNome()
						});

					it(`${teste}.${++complemento} - Validar se o campo "nome" está habilitado`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido se campo está habilitado
						cy.habilidatoNome()
					});

					it(`${teste}.${++complemento} - Validar se o campo "nome" está vazio`, () => //Primeiro teste V1
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido se campo está vazio
						cy.vazioNome()
					})

					it(`${teste}.${++complemento} - Validar se o campo "nome" está com placeholder correto`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido se o placeholder correto
						cy.placeholderNome()
					})
				});

				describe('Campo CPF', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "cpf" está visível`, () =>
					{
						//Dado que estou logado no sistema Bugger eat
						//Quando estiver na tela de cadastro 
						//Então eu valido se campo está visível
						cy.visivelCPF()
					});

					it(`${teste}.${++complemento} - Validar caracteristicas do campo`, () =>
					{
						//Dado que estou logado no sistema Bugger eat
						//Quando estiver na tela de cadastro 
						//Então eu valido se campo está visível
						cy.caracteristicasCPF()
					});

					it(`${teste}.${++complemento} - Validar se o campo "cpf" está habilitado`, () =>
					{
						//Passo - Dado estou na tela de cadastro
						//Passo - Quando verifico o campo cpf 
						//Passo - Então eu valido se campo está habilitado
						cy.habilidatoCPF()
					});

					it(`${teste}.${++complemento} - Validar se o campo "cpf" está vazio`, () => //Primeiro teste V1
					{
						//Passo - Dado estou na tela de cadastro
						//Passo - Quando verifico o campo cpf 
						//Passo - Então eu valido se campo está vazio
						cy.vazioCPF()
					})

					it(`${teste}.${++complemento} - Validar se o campo "cpf" está com placeholder correto`, () =>
					{
						//Passo - Dado estou na tela de cadastro
						//Passo - Quando verifico o campo cpf 
						//Passo - Então eu valido se campo está com placeholder correto
						cy.placeholderCPF()
					})
				});

				describe('Campo email', () =>
				{
					complemento = 1;
					
					it.only(`${++teste}.${complemento} - Validar caracteristicas do campo`, () =>
					{
						//Dado que estou logado no sistema Bugger eat
						//Quando estiver na tela de cadastro 
						//Então eu valido se campo está visível
						cy.caracteristicasEmail()
					})
				});

				describe('Campo whatsapp', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "whatsapp" está visível`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro 
						//Então eu valido se campo está visível
						cy.visivel()
					});

					it(`${teste}.${++complemento} - Validar se o campo "whatsapp" está habilitado`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está habilitado
						cy.get('input[name="whatsapp"]')
							.should('be.enabled');
					});

					it(`${teste}.${++complemento} - Validar se o campo "whatsapp" está vazio`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está vazio
						cy.get('input[name="whatsapp"]')
							.should('be.enabled')
								.and('have.value', '');
					})

					it(`${teste}.${++complemento} - Validar se o campo "whatsapp" está com placeholder correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('input[name="whatsapp"]')
							.should('be.visible')
								.and('have.attr', 'placeholder', 'Whatsapp');
					})

					
				});

				describe('Campo cep', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "cep" está visível`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('input[name="postalcode"]')
							.should('be.visible');
					});

					it(`${teste}.${++complemento} - Validar se o campo "cep" está habilitado`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está habilitado
						cy.get('input[name="postalcode"]')
							.should('be.enabled');
					});

					it(`${teste}.${++complemento} - Validar se o campo "cep" está vazio`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está vazio
						cy.get('input[name="postalcode"]')
							.should('be.enabled')
								.and('have.value', '');
					})

					it(`${teste}.${++complemento} - Validar se o campo "cep" está com placeholder correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('input[name="postalcode"]')
							.should('be.visible')
								.and('have.attr', 'placeholder', 'CEP');
					})
				});

				describe('Botao cep', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o botao está visível`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o botao está visível
						cy.get('[type="button"]')
							.should('be.visible');
					});

					it(`${teste}.${++complemento} - Validar se o botao está habilitado`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o botao está habilitado
						cy.get('[type="button"]')
							.should('be.enabled');
					});
					
					it(`${teste}.${++complemento} - Validar se o nome do botao está correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o nome do botao esta correto
						cy.get('[type="button"]')
							.and('have.value','Buscar CEP');
					})

					it(`${teste}.${++complemento} - Validar se a proriedade do botao está correta`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('[type="button"]')
								.and('have.attr', 'type', 'button');
					})
				});

				describe('Campo rua', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "rua" está visível`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('[name=address]')
							.should('be.visible');
					});

					it(`${teste}.${++complemento} - Validar se o campo "rua" está desabilitado`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está desabilidado
						cy.get('[name=address]')
							.should('be.disabled');
					});
					
					it(`${teste}.${++complemento} - Validar se o campo "rua" está com placeholder correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('[name=address]')
							.should('be.visible')
								.and('have.attr', 'placeholder', 'Rua');
					})
				});

				describe('Campo numero', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "numero" está visível`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('input[name="address-number"]')
							.should('be.visible');
					});

					it(`${teste}.${++complemento} - Validar se o campo "numero" está habilitado`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está habilitado
						cy.get('input[name="address-number"]')
							.should('be.enabled');
					});

					it(`${teste}.${++complemento} - Validar se o campo "numero" está vazio`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está vazio
						cy.get('input[name="address-number"]')
							.should('be.enabled')
								.and('have.value', '');
					})

					it(`${teste}.${++complemento} - Validar se o campo "numero" está com placeholder correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('input[name="address-number"]')
							.should('be.visible')
								.and('have.attr', 'placeholder', 'Número');
					})
				});

				describe('Campo complemento', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "complemento" está visível`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('input[name="address-details"]')
							.should('be.visible');
					});

					it(`${teste}.${++complemento} - Validar se o campo "complemento" está vazio`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está vazio
						cy.get('input[name="address-details"]')
								.should('have.value', '');
					})

					it(`${teste}.${++complemento} - Validar se o campo "complemento" está com placeholder correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('input[name="address-details"]')
								.should('have.attr', 'placeholder', 'Complemento');
					})
				});

				describe('Campo bairro', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "bairro" está visível`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('[name=district]')
							.should('be.visible');
					});

					it(`${teste}.${++complemento} - Validar se o campo "bairro" está desabilitado`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está desabilidado
						cy.get('[name=district]')
							.should('be.disabled');
					});
					
					it(`${teste}.${++complemento} - Validar se o campo "bairro" está com placeholder correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('[name=district]')
							.should('be.visible')
								.and('have.attr', 'placeholder', 'Bairro');
					})
				});

				describe('Campo Cidade-UF', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o campo "Cidade-UF" está visível`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está visível
						cy.get('[name=city-uf]')
							.should('be.visible');
					});

					it(`${teste}.${++complemento} - Validar se o campo "Cidade-UF" está desabilitado`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se campo está desabilidado
						cy.get('[name=city-uf]')
							.should('be.disabled');
					});
					
					it(`${teste}.${++complemento} - Validar se o campo "Cidade-UF" está com placeholder correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o placeholder correto
						cy.get('[name=city-uf]')
							.should('be.visible')
								.and('have.attr', 'placeholder', 'Cidade/UF');
					})
				});

				describe('Método de entrega', () =>
				{
					complemento = 1;
					it(`${++teste}.${complemento} - Validar se o titulo e subtitulo do campo estao visíveis`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se titudo do campo está visível
						cy.get('[role="legend"] h2').eq(2)
							.should('be.visible')
							.and('have.text','Método de entrega')
							cy.get('[role="legend"] span')
								.should('be.visible')
								.and('contain','Escolha um dos métodos abaixo')
					});

					it(`${teste}.${++complemento} - Validar se as imagens dos veiculos estao sendo mostradas corretamente`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se as imagens estao sendo mostradas corretamente
						cy.get('li > img').eq(0)
							.should('be.visible')
							.and('have.attr', 'src')
							.and('include', '/moto');
							cy.get('li > img').eq(1)	
								.should('be.visible')
								.and('have.attr', 'src')
								.and('include', '/bike');
								cy.get('li > img').eq(2)
									.should('be.visible')
									.and('have.attr', 'src')
									.and('include', '/van');
					});

					it(`${teste}.${++complemento} - Validar se as propriedades de acessibilidade estao condizentes com a imagem`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se as imagens estao sendo mostradas corretamente
						cy.get('.delivery-method img').then(($imgs) => {
							expect($imgs[0]).to.have.attr('alt', 'Moto')
							expect($imgs[1]).to.have.attr('alt', 'Bike Elétrica')
							expect($imgs[2]).to.have.attr('alt', 'Van/Carro')
						});
					});

					it(`${teste}.${++complemento} - Validar se o campo para carregar CNH esta visivel`, () => //Primeiro teste V1
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo para carregar CNH esta visivel
						cy.get('.dropzone')
							.should('be.visible')
							.and('have.attr', 'tabindex', '0')
							.and('contain.text','Foto da sua CNH')
							.and('exist');
							cy.get('.dropzone input[type="file"]')
								.should('exist')
								.and('have.attr', 'accept', 'image/*')
								.and('have.attr', 'type', 'file')
								.and('have.css', 'display', 'none');

					});
				});
			
			});
		});
	});


});


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
					it.only(`${teste}.${++complemento} - Validar se o campo "cpf" está em foco`, () =>
					{
						cy.validacao01CPF()
					})

					it(`${teste}.${++complemento} - Validar que o campo "cpf" foi preenchido com um cpf inválido`, () =>
					{
						//Dado que inseri um cpf imvalido
						cy.get('input[name="cpf"]')
							.type('12345678');

						//Quando clico no botão 'Cadastre-se para fazer entregas'
						cy.get('.button-success')
							.click();

						//Entao deve ser apresentado a mensagem 'Oops! CPF inválido' logo abaixo do campo
						cy.get('.alert-error').eq(1)
							.should('have.text','Oops! CPF inválido');
					})

					it(`${teste}.${++complemento} - Validar que o campo "cpf" foi preenchido com um cpf válido`, () =>
					{
						//Dado estou na tela de cadastro
						//Quando verifico o campo cpf
						cy.get('input[name="cpf"]')
						//E digito um cpf invalido
							.type('89088525064');
						//E clico no botão 'Cadastre-se para fazer entregas'
								cy.get('.button-success')
									.click();
						//Entao o campo deve ser apresentado sem nenhuma mensagem de erro abaixo
									cy.get('input[name="cpf"]')
										.parent()
										.find('.alert-error')
										.should('not.exist')
						//E deve estar preenchido com o nome valido digitado
										cy.get('input[name="cpf"]')
											.and('have.value','89088525064')
					})
					
					it(`${teste}.${++complemento} - Validar se o campo "cpf" aceita numeros e caracteres especiais`, () =>
					{
						//Dado estou na tela de cadastro
						//Quando verifico o campo cpf
						cy.get('input[name="cpf"]')
						//E digito um cpf invalido contendo caracteres especiais e numeros
							.type('!@#12345678');
						//E clico no botão 'Cadastre-se para fazer entregas'
								cy.get('.button-success')
									.click();
						//Entao deve ser apresentado a mensagem 'Oops! CPF inválido' logo abaixo do campo
									cy.get('.alert-error').eq(1)
										.should('have.text','Oops! CPF inválido');
								
					})

					it(`${teste}.${++complemento} - Validar se o campo "cpf" aceita numeros e letras`, () =>
					{
						//Dado estou na tela de cadastro
						//Quando verifico o campo cpf
						cy.get('input[name="cpf"]')
						//E digito um cpf invalido contendo numeros e letras
							.type('ads12345678');
						//E clico no botão 'Cadastre-se para fazer entregas'
								cy.get('.button-success')
									.click();
						//Entao deve ser apresentado a mensagem 'Oops! CPF inválido' logo abaixo do campo
									cy.get('.alert-error').eq(1)
										.should('have.text','Oops! CPF inválido');
					})

					it(`${teste}.${++complemento} - Validar se o campo "cpf" aceita quantidade abaixo de 11 caracteres`, () =>
					{
						//Dado estou na tela de cadastro
						//Quando verifico o campo cpf
						cy.get('input[name="cpf"]')
						//E digito um cpf invalido contendo abaixo de 11 caracteres
							.type('1234567898');
						//E clico no botão 'Cadastre-se para fazer entregas'
								cy.get('.button-success')
									.click();
						//Entao deve ser apresentado a mensagem 'Oops! CPF inválido' logo abaixo do campo
									cy.get('.alert-error').eq(1)
										.should('have.text','Oops! CPF inválido');
					})

					it(`${teste}.${++complemento} - Validar se o campo "cpf" aceita quantidade de acima de 11 caracteres`, () =>
					{
						//Dado estou na tela de cadastro
						//Quando verifico o campo cpf
						cy.get('input[name="cpf"]')
						//E digito um cpf invalido contendo abaixo de 11 caracteres
							.type('123456789876');
						//E clico no botão 'Cadastre-se para fazer entregas'
								cy.get('.button-success')
									.click();
						//Entao deve ser apresentado a mensagem 'Oops! CPF inválido' logo abaixo do campo
									cy.get('.alert-error').eq(1)
										.should('have.text','Oops! CPF inválido');
					})

					it(`${teste}.${++complemento} - Validar se o campo "cpf" aceita todos os caracteres iguais`, () =>
					{
						//Dado estou na tela de cadastro
						//Quando verifico o campo cpf
						cy.get('input[name="cpf"]')
						//E digito um cpf invalido contendo abaixo de 11 caracteres
							.type('11111111111');
						//E clico no botão 'Cadastre-se para fazer entregas'
								cy.get('.button-success')
									.click();
						//Entao deve ser apresentado a mensagem 'Oops! CPF inválido' logo abaixo do campo
									cy.get('.alert-error').eq(1)
										.should('have.text','Oops! CPF inválido');
					})

					it(`${teste}.${++complemento} - Validar se o campo "cpf" aceita a mascara de CPF no padrao com ponstos e digito`, () =>
					{
						//Dado estou na tela de cadastro
						//Quando verifico o campo cpf
						cy.get('input[name="cpf"]')
						//E digito um cpf valido contendo pontos e digito
							.type('890.885.250-64');
						//E clico no botão 'Cadastre-se para fazer entregas'
								cy.get('.button-success')
									.click();
						//Entao deve ser apresentado a mensagem 'Oops! CPF inválido' logo abaixo do campo
									cy.get('.alert-error').eq(1)
										.should('have.text','Oops! CPF inválido');
					})

					it(`${teste}.${++complemento} - Validar campo cpf preenchido e os campos, nome, e-mail, cep, numero, metodo de entrega e CNH nao preenchidos`, () =>
					{
						//Dado estou na tela de cadastro
						//Quando verifico o campo cpf
						cy.get('input[name="cpf"]')
						//E digito um cpf válido e o restantes dos campos em branco
							.type('89088525064');
						//E clico no botao Cadastre-se para fazer entregas
							cy.get('.button-success')
								.click();
						//Entao deve ser apresentado os erros para preencher os campos vazios						
								cy.get('.alert-error').eq(0)
									.should('be.visible')
									.and('have.text','É necessário informar o nome');
									cy.get('.alert-error').eq(1)
										.should('be.visible')
										.and('have.text','É necessário informar o email');
											cy.get('.alert-error').eq(2)
												.should('be.visible')
												.and('have.text', 'É necessário informar o CEP');
												cy.get('.alert-error').eq(3)
													.should('be.visible')
													.and('have.text', 'É necessário informar o número do endereço');
													cy.get('.alert-error').eq(4)
														.should('be.visible')
														.and('have.text', 'Selecione o método de entrega');
														cy.get('.alert-error').eq(5)
															.should('be.visible')
															.and('have.text', 'Adicione uma foto da sua CNH');
					})
				});

				describe('Campo Email', () =>
				{
					it(`${teste}.${++complemento} - Validar se o campo "email" está em foco`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo está em foco
							
						cy.get('input[name="email"]')
							.realHover()
								.and('have.css', 'border-bottom-color', 'rgb(52, 203, 121)')
								.and('have.css', 'border-left-color', 'rgb(52, 203, 121)')
								.and('have.css', 'border-right-color', 'rgb(52, 203, 121)')
								.and('have.css', 'border-top-color', 'rgb(52, 203, 121)')
					})

					it(`${teste}.${++complemento} - Validar se o campo "email" aceita numeros`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo aceita numeros
							
						cy.get('input[name="email"]')
							.type('12345');
							cy.get('.button-success')
								.click();
							cy.get('input[name="email"]')
								.should('have.value','12345');
								
					})

					it(`${teste}.${++complemento} - Validar se o campo "email" aceita numeros e letras`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo aceita numeros e letras
							
						cy.get('input[name="email"]')
							.should('be.visible')
							.type('jose123d');
							cy.get('.button-success')
								.click();
					})

					it(`${teste}.${++complemento} - Validar se o campo "email" aceita numeros, letras e caracteres especiais`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo aceita numeros, letras e caracteres especiais
							
						cy.get('input[name="email"]')
							.should('be.visible')
							.type('jose1!@#23d');
							cy.get('.button-success')
								.click();
					})

					
				});

				describe('Campo whatsapp', () =>
				{
					it(`${teste}.${++complemento} - Validar se o campo "whatsapp" está em foco`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo está em foco
							
						cy.get('input[name="whatsapp"]')
							.realHover()
								.and('have.css', 'border-bottom-color', 'rgb(52, 203, 121)')
								.and('have.css', 'border-left-color', 'rgb(52, 203, 121)')
								.and('have.css', 'border-right-color', 'rgb(52, 203, 121)')
								.and('have.css', 'border-top-color', 'rgb(52, 203, 121)')
					})

					it(`${teste}.${++complemento} - Validar se o campo "whatsapp" aceita somente numeros`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo aceita numeros
							
						cy.get('input[name="whatsapp"]')
							.type('adfr');
							cy.get('.button-success')
								.click();
							cy.get('input[name="whatsapp"]')
								.should('have.value','adfr');
								cy.get('.alert-error').eq(3)
									.should('be.visible')
									.and('have.text','Oops! Whatsapp com formato incorreto')
								
					})

					it(`${teste}.${++complemento} - Validar se o campo "whatsapp" possui formato correto`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo aceita numeros
							
						cy.get('input[name="whatsapp"]')
							.type('349882219');
							cy.get('.button-success')
								.click();
							cy.get('input[name="whatsapp"]')
								.should('have.value','349882219');
								cy.get('.alert-error').eq(3)
									.should('be.visible')
									.and('have.text','Oops! Whatsapp com formato incorreto')
					})
				});

				describe('Campo CEP', () =>
				{
					it(`${teste}.${++complemento} - Validar se o campo "CEP" está em foco`, () =>
					{
						//Passo - Dado estou acessando o sistema BugerEats
						//Passo - Quando estiver na tela de cadastro 
						//Passo - Então eu valido se o campo está em foco
							
						cy.get('input[name="postalcode"]')
							.realHover()
								.and('have.css', 'border-bottom-color', 'rgb(52, 203, 121)')
								.and('have.css', 'border-left-color', 'rgb(52, 203, 121)')
								.and('have.css', 'border-right-color', 'rgb(52, 203, 121)')
								.and('have.css', 'border-top-color', 'rgb(52, 203, 121)')
					})

					it(`${teste}.${++complemento} - Validar cep invalido`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro
						//E digitar um cep valido
						//E clico no botao "buscar cep"
						//Então é apresentado a mensagem "Informe um CEP valido"
							
						cy.get('input[name="postalcode"]')
							.type('38400');
							cy.get('[type="button"]')
								.click();
								cy.get('.alert-error').eq(0)
									.should('be.visible')
									.and('have.text','Informe um CEP válido')
					})

					it(`${teste}.${++complemento} - Validar cep válido`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro
						//E digitar um cep valido
						//E clico no botao "buscar cep"
						//Então os campos Rua, Bairro e Cidade devem ser preenchidos automaticamente
						cy.get('input[name="postalcode"]')
							.type('38400402');
							cy.get('[type="button"]')
								.click();
								cy.get('input[name="address"]')
									.should('not.have.value')
									cy.get('input[name="district"]')
										.should('not.have.value')
										cy.get('input[name="city-uf"]')
											.should('not.have.value')
					})

					it(`${teste}.${++complemento} - Validar cep inválido`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro
						//E digitar um cep valido
						//E clico no botao "buscar cep"
						//Então é apresentado a mensagem "Informe um CEP valido"
							
						cy.get('input[name="postalcode"]')
							cy.get('[type="button"]')
								.click();
								cy.get('.alert-error').eq(0)
									.and('have.text','Informe um CEP válido')
									
					})

					it(`${teste}.${++complemento} - Erro some após digitar cep válido`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro
						//E digitar um cep invalido
						//E clico no botao "buscar cep"
						//Então é apresentado a mensagem "Informe um CEP valido"
						//E após digitar um cep valido o erro desaparece
							
						cy.get('input[name="postalcode"]')
							cy.get('[type="button"]')
								.click();
								cy.get('.alert-error')
									.and('have.text','Informe um CEP válido')
									cy.get('input[name="postalcode"]')
							.type('38400402');
							cy.get('[type="button"]')
								.click();
								cy.get('.alert-error')
									.should('not.exist');
					})

				});

				describe('Campo Metodo de entrega', () =>
				{
					it(`${teste}.${++complemento} - Validar obrigatorietade na seleção de metodo de entrega `, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro
						//E clico no botao cadastre se sem escolho um metodo de entrega
						//Então devera aparecer um erro 'Selecione o método de entrega'

						cy.get('.delivery-method > :nth-child(1)')
							.should('not.be.selected')
						cy.get('.delivery-method > :nth-child(2)')
							.should('not.be.selected')
						cy.get('.delivery-method > :nth-child(3)')
							.should('not.be.selected')
							cy.get('.button-success')
								.click();
								cy.get('.alert-error').eq(5)
									.should('have.text','Selecione o método de entrega');
					})
					it(`${teste}.${++complemento} - Validar objetos selecionados `, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro
						//E seleciono o metodo de entrega
						//Então o objeto devera ficar selecionado, com a borda verde

						cy.get('.delivery-method > li').eq(0)
							.click()
							cy.get('.selected').eq(0)
								.should('have.attr','class','selected')
								.and('be.exist')
								.and('have.css','border-top-color','rgb(52, 203, 121)')
						cy.get('.delivery-method > li').eq(1)
							.click()
							cy.get('.selected').eq(1)
								.should('have.attr','class','selected')
								.and('be.exist')
								.and('have.css','border-top-color','rgb(52, 203, 121)')
						cy.get('.delivery-method > li').eq(2)
							.click()
							cy.get('.selected').eq(2)
								.should('have.attr','class','selected')
								.and('be.exist')
								.and('have.css','border-top-color','rgb(52, 203, 121)')
					})
				});

				describe('Campo CNH', () =>
				{
					
					it(`${teste}.${++complemento} - Validar seleção de imagem correta`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro
						//E clico no campo "Foto da sua cnh"
						//Então a foto deverá ser enviada para a aplicação

						cy.get('.dropzone input[type="file"]')
							.selectFile('cypress/support/img/cnh.jpeg', { force: true })
					})

					it(`${teste}.${++complemento} - Validar o upload de uma imagem`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro
						//E clico no campo "Foto da sua cnh"
						//Então a foto deverá ser enviada para a aplicação

						cy.get('.dropzone input[type="file"]')
							.attachFile('/' + 'cnh.jpeg')
					})

					it(`${teste}.${++complemento} - Validar se após o upload a imagem aparece na tela`, () =>
					{
						//Dado estou acessando o sistema BugerEats
						//Quando estiver na tela de cadastro
						// E faço o upload da imagem
						//Então a foto deverá estar visível no campo
						cy.get('.dropzone input[type="file"]')
							.selectFile('cypress/support/img/cnh.jpeg', { force: true });
						cy.get('.dropzone img')
  							.should('have.attr', 'src');

						
					})
					
				});

				
			});
		});
	});
});


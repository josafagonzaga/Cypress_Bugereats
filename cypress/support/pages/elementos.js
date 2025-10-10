export class tela_home 
{
    get logotipo() 
    {
        return cy.get('img') //.classe
    };

    get home() 
    {
        return cy.get('.bg-active') //.classe
    };
    get btcadastro (){
        return cy.get('a')
    }
    

  get tituloPrincipal() {
    return cy.get('h1'); // Texto: Seja um parceiro entregador...
  }

  get paragrafoDescricao() {
    return cy.get('p'); // Texto: Em vez de oportunidades...
  }

  get botaoCadastro() {
    return cy.get('[href="/deliver"]'); // Botão principal verde
  }

  get iconeBotaoCadastro() {
    return cy.get('span > svg'); // Ícone dentro do botão
  }

  get textoBotaoCadastro() {
    return cy.get('strong'); // Texto do botão: Cadastre-se para fazer entregas
  }
    
};

//apenas exemplo
export class tela_cadastro
{
    get logotipo() 
    {
        return cy.get('.logo') //.classe
    };

    get home() 
    {
        return cy.get('.bg-active') //.classe
    };
};

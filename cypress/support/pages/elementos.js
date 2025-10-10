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
export class tela_cadastro_titulos
{
    get logotipo() 
    {
        return cy.get('.logo') //.classe
    };

    get home() 
    {
        return cy.get('.bg-active') //.classe
    };

    get tituloPrincipal (){
      return cy.get('h1') //Cadastre-se para fazer entregas
    }
    get subtitulo1 (){
      return cy.get('h2').eq(0) //dados
    }
    get subtitulo2 (){
      return cy.get('h2').eq(1) //endereço
    }
    get subtitulo3 (){
      return cy.get('h2').eq(2) //metodo de entrega
    }
};

export class tela_cadastro_campos
{
    get nome () 
    {
        return cy.get('input[name="fullName"]') //campo nome
    };

    get cpf () 
    {
        return cy.get('input[name="cpf"]') //campo cpf
    };

    get email () 
    {
        return cy.get('input[name="email"]') //campo email
    };

    get whatsapp () 
    {
        //return cy.get('input[name="whatsapp"]') //campo whatsapp
    };
    

};




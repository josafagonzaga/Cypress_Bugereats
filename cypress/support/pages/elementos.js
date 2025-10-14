export class tela_home 
{
    get logotipo() 
    {
        return cy.get('img[src="/static/media/logo.e7289086.svg"]')
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
        return cy.get('input[name="whatsapp"]') //campo whatsapp
    };
    
    get cep () 
    {
        return cy.get('input[name="postalcode"]') //campo cep
    };

    get btcep () 
    {
        return cy.get('[type="button"]') //botao cep
    };
    
    get rua () 
    {
        return cy.get('[name=address]') //campo rua
    };

    get numero () 
    {
        return cy.get('input[name="address-number"]') //campo numero
    };

    get complemento () 
    {
        return cy.get('input[name="address-details"]') //campo complemento
    };
    
    get bairro () 
    {
        return cy.get('[name=district]') //campo bairro
    };

    get cidade () 
    {
        return cy.get('[name=city-uf]') //campo cidade
    };

    get metodoentrega () 
    {
        return cy.get('[role="legend"] h2').eq(2) //campo metodo de entrega
    };

    get escolhametodo () 
    {
        return cy.get('[role="legend"] span') //campo escolha um metodo
    };
    get img1 () 
    {
        return cy.get('li > img').eq(0) //img 1
    };
    get img2 () 
    {
        return cy.get('li > img').eq(1) //img 2
    };
    get img3 () 
    {
        return cy.get('li > img').eq(2) //img 3
    };
    get acessibilidade () 
    {
        return cy.get('.delivery-method img') //acessibilidade
    };
     get cnh01 () 
    {
        return cy.get('.dropzone') //cnh01
    };
     get cnh02 () 
    {
        return cy.get('.dropzone input[type="file"]') //cnh02
    };

};




"use strict"

/* Sobre funções

Funções são blocos de código que podem ser executados/resproveitados em praticamente qualquer lugar de uma aplicação/site

Usar funções também é benéfico no ponto de vista de organização de código

O JS já possui centenas de funções prontas
log()
alert()
toFixed()
prompt()
etc
*/

/* Como escrever funções no JS? */

//Forma 1: Função anônima

const exemplo1 = function(){
    console.log("Função anônima");
};

//Forma 2: Função nomeada/Declarada
function exemplo2(){
    console.log("Função nomeada/declarada");
}

//Forma 3: arrow function

const exemplo3 = () => {
    console.log("Arrow Function");
};

//Chamada de Função para execução
exemplo1();
exemplo2();
exemplo3();

// Função com parâmetros e retorno de dados/resultados
function somar(valor1, valor2){
    return valor1+valor2;
}


console.log( somar(10, 20) );
console.log( somar(15, 50) );
console.log( somar(30,47.8) );

// Formatação de valores em reais

let preco = 1000;
let desconto = preco * 0.10; //;10%
let precofinal = preco - desconto;



function formatarPreco(valor){
    let opcoes = {
        style: "currency",
        currency: "BRL"
    }
return valor.toLocaleString("pt-br",opcoes)
}

//PARA REAL
console.log(`Preço: ${preco.toLocaleString("pt-br",{
    style: "currency",
    currency: "BRL"
})}`

);

console.log(`Desconto: ${desconto.toLocaleString("pt-br",{
    style: "currency",
    currency: "BRL"
})}`
);
console.log(`Preço final ${precofinal.toLocaleString("pt-br",{
    style: "currency",
    currency: "BRL"
})}`
);

//PARA DÓLAR

/* console.log(`Preço: ${preco.toLocaleString("en",{
    style: "currency",
    currency: "USD"
})}`

);

console.log(`Desconto: ${desconto.toLocaleString("en",{
    style: "currency",
    currency: "USD"
})}`
);
console.log(`Preço final ${precofinal.toLocaleString("en",{
    style: "currency",
    currency: "USD"
})}`
); */
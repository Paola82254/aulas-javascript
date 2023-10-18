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


console.log(---------);

/* Sobre Arrow Function
Sintaxe moderna para funções no JS,
bastante usada por bibliotecas, frameworks 
(React, Angular, Vue e etc).

A sintaxe geral é:

const algumNome = () => {};

No entanto, esta sintaxe pode ser um pouco mais concisa
*/
// versão 1
/* function dobra (valor){
    return valor * 2;

} */

//versão 2 (Arrow Function)

/* const dobra = () => {
    return valor * 2;
}; */

//Versão 3 (Arrow Function com retorno implícito)
const dobra = valor => valor * 2;

//Chamadas
console.log(dobra(10));
console.log(dobra(1325));
console.log(dobra(55.47));
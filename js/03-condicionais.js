// Estruturas de Controle Condicional
// Comandos que permitem analisar uma ou mais condições.
// E a partir do resultado dessa análise (verdadeiro ou falso),
// o programa pode executar ações diferentes.

// comandos mais comuns: if(se), else (senão), else if (senão se) 

let usuario = prompt("Qual o seu nome?")
let idade = prompt ("Quantos anos você tem?")

let mensagem; // indefinida/undefined

// verificar a idade e determinar se é menor ou maior

// if (idade >= 18){
//     mensagem = "maior";
// } else{
//     mensagem = "menor"
// }

// // apresentando os resultador após a condicional
// console.log (`${usuario} é ${mensagem} de idade`);
// alert (`${usuario} é ${mensagem} de idade!`);


// condicional ENCADEADA/SUCESSIVA
if (idade >= 60) {
    mensagem = "idoso(a)";
} else if( idade >= 18 ) {
    mensagem = "adulto(a)";
}

console.log(`${usuario} você tem ${idade} anos e é considerado ${mensagem},`);

alert(`${usuario} você tem ${idade} anos e é considerado ${mensagem},`)
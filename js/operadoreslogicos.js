"use strict";

// Requisitos da escola para aprovação
const mediaMinima = 4;
const limiteDeFaltas = 10;

// Resultados do aluno fictício
let aluno = "Jean"
let mediaFinal = 8.5;
let faltas = 8;
let resultado

//Operador Lógico E (AND)

/* if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
    resultado = "Aprovado;"
} else {
    resultado = "Reprovado";
} */

/* if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas) {
    resultado = "Aprovado"
} else if (faltas > limiteDeFaltas){
    resultado = "   Reprovado por faltas";
} else {
    resultado = "Reprovado"
} */

if( faltas > limiteDeFaltas){
    resultado = "Reprovado por faltas";
    } else if (mediaFinal>=mediaMinima){
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado"
    }



console.log(`O aluno ${aluno} está ${resultado}`);
console.log(`Média do aluno: ${mediaFinal}`);
console.log(`Faltas do Aluno: ${faltas}`);

console.log("---------");

// Operador Lógico || (OR - OU)
let diaDaSemana = "domingo";

if (diaDaSemana == "sábado" || diaDaSemana == "domingo") {
    console.log("Final de Semana :)");
} else {
    console.log("Vá trabalhar...");
}

console.log("-------");

/* Operador lógico ! (NOT - NÃO/NEGAÇÃO) */
let blackFriday = true;
if( !blackFriday ){
    console.log("Preços normais...");
} else {
    console.log("Preços com desconto...");
}
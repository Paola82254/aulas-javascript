"use strict";

// Requisitos da escola para aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

// Resultados do aluno fictício
let aluno = "Jean"
let mediaFinal = 8.5;
let faltas = 8;
let resultado

//Operador Lógico E (AND)

if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
    resultado = "Aprovado;"
} else {
    resultado = "Reprovado";
}

console.log(`O aluno ${aluno} está ${resultado}`);
console.log(`Média do aluno: ${mediaFinal}`);
console.log(`Faltas do Aluno: ${faltas}`);
// Estruturas de dados

// - Arrays (Vetores/Matrizes)
// Lista de dados indexados, sequenciais, acessíveis por um índice numérico.

// Objetos
// Lista de dados não indexados e formados por propriedades e valores.
// Arrays (os índices sempre começam no zero)
let cursos = ["Node.js", "React", "SQL", "UX/UI Design"]

console.log(cursos); // Saída direta/estruturada
console.log(cursos[2]); // SQL 

// 1. Crie uma constante chamada "dados" e coloque dentro dela os nomes de uma pessoa (nome, sobrenome, idade, telefone, cidade)

const dados = ["Mateus", "Pires", 17, "(11)99999-9999", "São Paulo"]

// Mostre no console uma mensagem contendo somente o nome e a idade da pessoa. Exemplo: "Fulano tem 25 anos"
console.log(`${dados[0]} tem ${dados[2]} anos.`)

console.log("------");

//Objeto
let carro = {
    marca: "Fiat",
    modelo: "Uno com escada",
    portas: 2,
    cor: "branco"
};

console.log(carro);
console.log(carro.modelo);
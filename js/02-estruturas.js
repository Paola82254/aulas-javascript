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
    cor: "branco",
    opcionais: ["Ar condicionado", "Vidros elétricos", "Alarme"]
};

console.log(carro);
console.log(carro.modelo);

console.log(`Carros da ${carro.marca} tem a cor ${carro.cor}`);
console.log(`Este carro tem ${carro.opcionais[0]}`);

//Exercícios
// Crie um novo objeto contendo informações de algo que você gosta (filme, livro, comida, jogo etc)

let dadosPessoais = {
    filme: "Sempre ao seu lado",
    livro: "Bíblia",
    comida: "Macarrão",
    jogo: "Roblox"
}

// 2)Mostra uma mensagem com pelo menos 2 propriedades do objeto que você criou

console.log(`Meu filme favorito é ${dadosPessoais.filme} e minha comida favorita é ${dadosPessoais.comida}`);

console.log('------');

// Objeto com array e com outro objeto

let pessoa = {
    nome: "Shiryu",
    idade: 20,
    telefones: ["11-2135-0300", "11-91234-5678"],
    medidas: {
        peso: 65,
        altura: 1.75,
    }
};

console.log(`Nome: ${pessoa.nome}`);
console.log(`Celular: ${pessoa.telefones[1]}`);
console.log(`Peso: ${pessoa.medidas.peso} kg`);

// Array de objetos

let alunos = [
    {
        nome: "Naruto",
        idade: 10
    },
    {
        nome: "Guts",
        idade: 30
    },
    {
        nome: "Dohko",
        idade: 120
    }
];

console.log( alunos[1].nome); // Guts
console.log( alunos[0].nome); // Naruto
console.log(`O cavaleiro de ouro originalmente era o ${alunos[2].nome} de Libra que tem ${alunos[2].idade} anos`);

// Array como matriz

let tecnologias = [
    ["HTML5", "CSS3", "JavaScript"],
    ["PHP", "SQL", "APIs", "Node", "Python"],
    ["Figma", "Photoshop"]
];

console.log(tecnologias[1][3]); // Node
console.log(tecnologias[2][1]); // Photoshop
console.log(tecnologias[0][0]); // HTML5

console.table(cursos)
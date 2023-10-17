/* Comandos de Repetição
Instruções para realizar ações por uma quantidade específica de vezes. */

/* Comandos tradicionais:
- while    - Enquanto
-do/while  - Faça/Enquanto
-for       - Para
*/

//  OBS: Normalmente o loop é controlado através de uma variável contadora

//Exemplo WHILE (ENQUANTO)
/* let contador = 1;

while( contador<= 5 ){
    console.log(`Valor de contador: ${contador}`);
    contador++; //++incremento
} */

//EXEMPLO DO/WHILE
/* let i = 1;

do {
    console.log(`i vale: ${i}`);
    ci++;
} while( i <= 3 ) */

// OBS: Normalmente variáveis de controle de repetição são chamadas de i, j ou k

//EXEMPLO FOR (PARA)

/* for(let i = 1; i<=10; i++){
    console.log(`i vale ${i}`);
} */

/* Loop com Array */
let clientes = ["Dio", "Gillan", "Martin", "Hughes", "Paola", "Giovanna"];

/* console.log(clientes[2]); */


//"Cache/Memória" da quantidade de elementos do Array
let quantidade = clientes.length

for( let i = 0; i < quantidade ; i++){
    console.log(`Cliente: ${clientes[i]}`);
}


console.log("----------");
//for/of ->para arrays
let bandas = ["Slayer","Dream Theater","Nightwish"];

for (let banda of bandas){
    console.log(banda);
}


//for/in -> para objetos
let livro = {
    titulo: "HTML5",
    autor: "Maujor",
    site:"http://maujor.com",
    ano: 2016,
    editora: "Novatec",
    edicao: 3
};

//para DADOS dentro/ em LIVRO

for(let dados in livro) {
    //Acessar apenas a propriedade
    //comsole.log(dados);

    //Acessar o valor de cada propriedade
    //console.log(livro[propriedade]);

    console.log(`${propriedade} -> ${livro[propriedade]}`);
}

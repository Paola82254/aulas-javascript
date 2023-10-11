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
let contador = 10;

do {
    console.log(`Contador vale: ${contador}`);
    contador++;
} while( contador <= 3 )
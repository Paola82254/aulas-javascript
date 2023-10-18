/* 1. Crie um arquivo chamado exercicio03.html.
2. A partir dele, faça um script chamado exercicio03.js (não se esqueça de usar a pasta js).
3. Programe no arquivo JS recursos que permitam converter um valor em dólar (ex: 1000 dólares) para um valor em reais (ex: 5.030 reais).


 

Para esta atividade, você deverá criar uma função chamada converteMoeda e realizar dentro dela a operação de conversão.

 

Dica: para converter, basta pegar o valor e multiplicar pela cotação do dólar (hoje 17/10/2023, está em R$ 5,03)

 

4. Após a conversão, mostre o valor original em dólar e o valor convertido para reais. */

"use strict"

//dados de entrada (exemplos de valores)

let valorDaCotacaoDoDia = 5.03;
let valorEmDolares = 2500;

//função que realiza a conversão matemática ao receber PARÂMETROS
function converteMoeda (valor, cotacao) {
    return valor * cotacao
}

//variável que receberá o resultado processado pela função DEPOIS que a função terminar sua execução

let valorConvertido = converteMoeda(valorDaCotacaoDoDia, valorEmDolares)

//saídas após o processamento

console.log(valorEmDolares); // quanto que era em dólares
console.log(valorConvertido);  // quanto que fica em reais

console.log(formatarMoeda(valorEmDolares, "en", "USD"));
console.log(formatarMoeda(valorConvertido, "pt-br", "BRL"));


function formatarMoeda(valor, local, moeda){
    let opcoes = {
        style: "currency",
        currency: moeda
    }
return valor.toLocaleString(local,opcoes)
}
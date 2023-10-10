let nota1 = 2
let nota2 = 2

let media = (nota1+nota2)/2
console.log(`Sua média é ${media}`);

if (media>=7) {
    mensagem = "Aprovado";
} else if (media>=5){
    mensagem = "Recuperação";
}
else {
    mensagem = "Reprovado"
}

console.log(`Sua situação é ${mensagem}`);
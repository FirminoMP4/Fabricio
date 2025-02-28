//comentario de uma linha 
/*
comentario em bloco
*/

//variaveis
//var -> não usa no dia a dia
let nome = "Firmino";
const idade = 20;

//nome = "teste"
//idade = 20;

//operadores
const soma = 2 + 2
const subtracao = 2 - 2
const multiplicacao = 2 * 2
const divisao = 2 / 2
const resto = 3 % 2

// operadores de comparação 
const igul = 2 == 2 
const diferente = 3 != 2
const maior = 3 > 2 
const menor = 2 < 3
const maiorOUigual = 2 >= 2
const menorOUigual = 3 <= 2

// estruturas condições 
if (idade > 18){
    console.log("Maior de idade")
}

if (idade >= 18){
    console.log("maior de idade")
}else{
    console.log("Menor de idade")
}

// operador ternario
const mensagem = idade >= 18 ? "Maior de Idade" : "Menor de idade"
console.log("Mensagem ->", mensagem)

// arrays - listas

const frutas = ["maçã","Banana","Uva"]
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])

console.log("Quantas frutas tem no array?")
console.log(frutas.length)

frutas.push("Laranja")
console.log("E agora, quantas frutas tem no array")
console.log(frutas.length)

frutas.forEach(fruta => console.log(fruta))

frutas.pop()
console.log(frutas)
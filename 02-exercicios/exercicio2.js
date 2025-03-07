
//Exercício 1: Manipulação de Strings
//Crie um script que receba uma string e faça as seguintes operações:

//1.Converta a string para maiúsculas.

let nome = "Fabricio Firmino"
let maiuscula = nome.toUpperCase()
console.log(maiuscula)


//2. Converta a string para minúsculas.

let minuscula = nome.toLowerCase()
console.log(minuscula)


//3. Inverta a string.


let Inverter = nome.split("").reverse().join("")
console.log(Inverter)


//4. Substitua todas as ocorrências de uma letra específica por outra.

let modificado = nome.replace("F","bricio");
console.log(modificado);

//Exercício 2: Operadores Aritméticos e de Comparação
//Crie um script que receba dois números e faça as seguintes operações:

//1. Some os dois números.
let numero1 = 5;
let numero2 = 15;

const soma = numero1 + numero2;

console.log(soma);

//2. subtraia os dois numeros

const subtracao = numero2 - numero1;
console.log(subtracao);

//3. Multiplique os dois números.

const multiplicacao = numero1 * numero2;
console.log(multiplicacao);

//4. divida os dois numeros.

const divisao = numero1 % numero2;
console.log(divisao)

//5.Verifique se o primeiro número é maior que o segundo.

const verificar = numero1 > numero2;
console.log(verificar)

//Exercício 3: Estruturas de Controle
//Crie um script que receba uma idade e verifique se a pessoa é:

//1
let idade = 70;
if (idade < 18) {
console.log("Menor de idade");
} else {
    console.log("Maior de idade");
}
//2 
if (idade > 18) {
    console.log("Menor de idade");
    } else {
        console.log("Maior de idade");
    }
//3


if (idade >= 65) {
    console.log("A pessoa é idosa.");
} else {
    console.log("A pessoa não é idosa.");
}

//Exercício 4: Laços de Repetição

//1.
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//Exercício 5: Funções

//1. O dobro do número.
let numero0 = 3
numero = parseFloat(numero0);
let resultado = dobrarNumero(numero);
console.log("O dobro do número é:", resultado);

<<<<<<< HEAD

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
=======
//Exercício 1: Manipulação de Strings: Crie um script que receba uma string e faça as seguintes operações:
let nome = "Fabricio Firmino"
//1. Converta a string para maiúsculas.

let NomeMaiusculo = nome.toUpperCase()
console.log(nomeMaiusculo)

//2. Converta a string para minúsculas.
let nomeMinusculo = nome.toLowerCase()
console.log(nomeMinusculo)

//3. Inverta a string.
let invertidas = nome.split('').reverse().join('');
console.log(invertidas);

//4. Substitua todas as ocorrências de uma letra específica por outra.
let modificados = nome.replace("s", "sinho"); 
console.log(modificados); 

// Exercício 2: Operadores Aritméticos e de Comparação: Crie um script que receba dois números e faça as seguintes operações:
// 1. Some os dois números.
let numA = 15 ;
let numB = 5;
const soma = numA + numB;

console.log(soma)
// 2. Subtraia o segundo número do primeiro.
const subtracao = numB - numA;
console.log(subtracao)
// 3. Multiplique os dois números.
const mult = numA * numB;
console.log(mult)
// 4. Divida o primeiro número pelo segundo.
const div = numA / numB;
console.log(div)
// 5. Verifique se o primeiro número é maior que o segundo.
if(numA > numB){
    console.log("O primeiro número é maior que o segundo")
} else{
    console.log("o segundo número é maior que o primeiro")
}

// Exercício 3: Estruturas de Controle: Crie um script que receba uma idade e verifique se a pessoa é:
let idade = 70;
// 1. Menor de idade.
if(idade < 18){
    console.log("É menor de idade")
}else{
    console.log("É maior de idade")
}
// 2. Maior de idade.
if(idade => 18){
    console.log("É maior de idade")
}else{
    console.log("É menor de idade")
}
// 3. Idosa (idade >= 65).
if(idade => 65){
    console.log("É idoso")
} else {
    console.log("Não é idoso, ainda...")
}

// Exercício 4: Laços de Repetição: Crie um script que imprima os números de 1 a 100 usando:
//1. Um laço for .
for (let i = 0; i <= 100; i++) {
    console.log(i);
}

// Exercício 5: Funções: Crie um script que tenha uma função que receba um número e retorne:
// 1. O dobro do número.
function dobro(num) {
    const resultado = num * 2;
    console.log(resultado)
}
dobro(5)
// 2. O triplo do número.
function triplo(num) {
    const resultado = num * 3;
    console.log(resultado)
}
triplo(5)

// 3. O quadrado do número.
function quadrado(num) {
    const resultado = num * num;
    console.log(resultado)
}
quadrado(5)

// Exercício 6: Arrays: Crie um script que receba um array de números e faça as seguintes operações:
let numeros = [10, 20, 30, 40, 50];
    
// 1. Adicione um número ao final do array.
numeros.push(7)
console.log(numeros)
// 2. Remova o primeiro número do array.
numeros.shift()
console.log(numeros)
// 3. Encontre o maior número do array.
let maiorNumero = Math.max(...numeros);
console.log(maiorNumero);
// 4. Encontre o menor número do array.let maiorNumero = Math.max(...numeros);
let menorNumero = Math.min(...numeros);
console.log(menorNumero);


// Exercício 7: Métodos de Arrays: Crie um script que receba um array de strings e faça as seguintes operações:
let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"];
// 1. Converta todas as strings para maiúsculas.
let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasMaiusculas);
// 2. Filtre as strings que começam com a letra 'A'.
let frutasComA = frutas.filter(fruta => fruta[0].toUpperCase() === 'A');
console.log(frutasComA);
// 3. Crie um novo array com o comprimento de cada string.
let comprimentoFrutas = frutas.map(fruta => fruta.length);
console.log(comprimentoFrutas);


// Crie um script que receba um objeto representando uma pessoa e faça as seguintes operações:
let pessoa = { nome: "Carlos", idade: 28, cidade: "São Paulo" };

// 1. Adicione uma nova propriedade ao objeto.
pessoa.profissao = "Desenvolvedor";
console.log( pessoa);

// 2. Remova uma propriedade do objeto.
delete pessoa.idade;
console.log( pessoa);

// 3. Liste todas as propriedades do objeto.
console.log("Propriedades do objeto:");
for (let chave in pessoa) {
  console.log(chave);
}

// Exercício 9: Desestruturação de Objetos: Crie um script que receba um objeto representando um livro e faça as seguintes operações:
let livro = { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 };
// 1. Desestruture o título e o autor do objeto.
let { titulo, autor } = livro;
console.log("Título:", titulo); 
console.log("Autor:", autor);
// 2. Crie uma função que receba o objeto e retorne uma string com o título e o autor.
function detalhesLivro(livro) {
    const { titulo, autor } = livro;
    return `O livro "${titulo}" foi escrito por ${autor}.`;
  }
  
  let detalhes = detalhesLivro(livro);
  console.log(detalhes); 

// Exercício 10: Módulos: Crie dois scripts, um para exportar funções e outro para importá-las e utilizá-las:
// 1. No primeiro script, exporte uma função que calcule a área de um círculo.
// 2. No segundo script, importe a função e calcule a área de um círculo com raio 5.
import { calcularAreaCirculo } from './calculos.js';
let raio = 5;
let area = calcularAreaCirculo(raio);

console.log(`A área do círculo com raio ${raio} é: ${area}`);
>>>>>>> b78308497cc3625a4679a88d539a463aa0e3fb4d

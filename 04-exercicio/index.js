


import {somar, subtrair, dividir, multiplicar} from "./calculadora.js"

const a = 10
const b = 5

console.log("Soma: ", somar(10, 5));
console.log("Subtração: ", subtrair(10, 5));
console.log("Multiplicação: ", multiplicar(10, 5));
console.log("Divisão: ", dividir(10, 5));

import moment from 'moment';
function calcularIdade(anoNascimento)  {
    return hoje - anoNascimento}

const anoNascimento = 1990;
const hoje  = moment().year();
console.log("Idade:",calcularIdade(anoNascimento,hoje), "anos");
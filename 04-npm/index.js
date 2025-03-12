// Codigo para executar o meu projeto 

// Importar um modulo
import { calcularIMC,tabelaIMC } from "./calculadoraIMC.js"

console.log(">>> Calculadora IMC <<<")
console.table(tabelaIMC)

const peso = 80
const altura = 1.70

const resultado = calcularIMC(peso, altura)

console.log("resultado IMC:")
console.log(resultado.toFixed(2))

// Importar um modulo externo, uma biblioteca
import moment from "moment";

const hoje = moment().locale('pt-br')

console.log("Data:")
console.log(hoje.format("DD/MM/YYYY"))
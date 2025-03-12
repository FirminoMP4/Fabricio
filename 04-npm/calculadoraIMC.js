// criando um modulo no meu projeto
// exportar as funcionalidades desse modulo 

 export function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

export const tabelaIMC = [
    {limite: 18.5, classificacao:"Magreza"},
    {limite: 24.9, classificacao:"normal"},
    {limite: 29.9, classificacao:"Sobrepeso"},
    {limite: 34.9, classificacao:"obesidade Grau I"},
    {limite: 39.9, classificacao:"obesidade Grau II"},
    {limite: 48.0, classificacao:"obesidade Grau III"},
]
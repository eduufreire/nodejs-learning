//Carregar o módulo dentro do arquivo
// let somaFunc = require("./modules-calc/somar")
// let subFunc = require("./modules-calc/sub")
// let multiFunc = require("./modules-calc/multi")
// let divFunc = require("./modules-calc/div")

// console.log(somaFunc(1, 2))

// Carregando o modulo com as funcoes
let calculadoraModules = require("./modules-calc/modulestest")

// Acessando as funcoes dentro do objeto carregado
let teste = calculadoraModules.sub(1 , 2)
console.log(teste)

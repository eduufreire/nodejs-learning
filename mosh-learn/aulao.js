// modulo para trabalhar com arquivos e diretorios
const path = require('path')

const os = require('os')

var teste = path.parse(__filename)
console.log(teste)

var outroTeste = os.totalmem()
var maisUm = os.freemem()
console.log(`${outroTeste / 1024} - ${maisUm / 1024}`)
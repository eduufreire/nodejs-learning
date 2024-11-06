let valor = 276.82

let notas = [100, 50, 20, 10, 5, 2]
let moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
let qtdeNotas = []
let qtdeMoedas = []

for(var i = 0; i < notas.length; i++) {
    qtdeNotas.push(Math.floor(valor / notas[i]))
    valor = valor % notas[i]
}

for(var j = 0; j < moedas.length; j++) {
    qtdeMoedas.push(Math.floor(valor / moedas[j]))
    valor = parseFloat(valor.toFixed(2)) % moedas[j] + 0.00001
}

console.log('NOTAS:')
for(var k = 0; k < notas.length; k++) {
    console.log(`${qtdeNotas[k]} nota(s) de R$ ${notas[k]}.00`)
}

console.log('MOEDAS:')
for(var m = 0; m < moedas.length; m++) {
    console.log(`${qtdeMoedas[m]} moeda(s) de R$ ${moedas[m].toFixed(2)}`)
}
// const fs = require("fs");

// // sincrono: executa uma apos a outra
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);

// CALLBACK HELL
// fs.readFile('./edu.txt', (err, content) => {
//     console.log(err, String(content))
//     fs.readFile('./edu.txt', (err, content) => {
//         console.log('dentro do outro ballck')
//         console.log(err, String(content))
//     })
// })

// // promises
// const readFile = (file) =>
//   new Promise((resolve, reject) => {
//     fs.readFile(file, (err, content) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(content);
//       }
//     });
//   });

// readFile("./eduwewe.txt")
//   .then((content) => {
//     console.log(String(content));
//   })
//   .catch((err) => {
//     console.error(err);
//   });

 
// CALLBACK
// uma função é um objeto, então podemos passar uma função como argumento em outras funções
// essa função que é passada como paramentro, chamamos de CALLBACK
//

// sincrono: codigo é executado linha pro linha, em ordem
// o código é interrompido enquanto espera o retorno de uma função
// a execucao do código é travada enquanto estive exeuctando uma função demorada

// assincrono: codigo executado simutameamente ou aleatoriamente
// código não é sequencial, quando a função dmeorada é chamada, o código ainda continuara sendo executado
// enquanto espera a resposta da função. O cóigo fica "escutando" a função receber o retorno e executa o que é esperado.
// um exemplo: eu envio uma mensagem com uma foto, mas ao inves de esperar afoto carregar por inteiro, ainda posso mandar mesnagem sem que meu chat trave

// assincrono:
// tecnica que permite o nosso programa a executar uma tarefa de longa duracao
// e continue respondendo a eventos enquanto essa tarefa é executada

// para evitar callbacks hells, podemos utilizar promises
// promise: promesa que no futuro será retornado algo para alguma funcao
// uma promise retorna um valor de imediato e depois retorna o valor esperado


// forma mais "limpa" de enxergar uma promise
// await == esperar
// o códgio abaixo do awiat nao sera executado ate que a requisicao seja concluida
// podemos usar try { } catch { } para tratar os retornos

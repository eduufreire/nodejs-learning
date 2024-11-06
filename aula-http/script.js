let http = require("http")

// Criando um servidor HTTP
// listen -> indica qual porta de rede o servidor será aberto
http.createServer((req, res)=>{
    res.end("Olá")
}).listen(8081)

console.log("O servidor esta criado")
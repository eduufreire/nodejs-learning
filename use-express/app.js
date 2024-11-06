const express = require("express")
const app = express()

// Estrutura para criar uma rota
// app.get("/", function(req, res){
//     res.send("Hello, world!")
// })

//Rota para redenrizar um arquivo
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", (req, res)=>{
    res.send("Estoun a página sobre")
})

app.get("/test", (req, res)=>{
    res.send("Estou na página de testes")
})

// Criando uma rota com parâmetros
// app.get("/rota/:param")
app.get("/ola/:nome", (req, res)=>{
    res.send("Ola " + req.params.nome)
})


app.listen(8081, function(){
    console.log("Servidor rodando em: http://localhost:8081")
})

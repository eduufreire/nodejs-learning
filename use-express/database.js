const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    "nodejs", 
    "root", 
    "urubu100", 
    {host: "localhost", dialect: "mysql"}
)

const Postagem = sequelize.define('postagem', {
    titulo : {
        type: Sequelize.STRING
    },
    conteudo : {
        type: Sequelize.TEXT
    }
})





const User = sequelize.define('usuarios', {
    nome : {
        type : Sequelize.STRING
    },
    sobrenome : {
        type : Sequelize.STRING
    },
    idade : {
        type : Sequelize.INTEGER
    },
    email : {
        type: Sequelize.STRING
    }
})

// importa o mongoose através do require
const mongoose = require('mongoose')

// cria uma variável chamada REcipeSchema que vai instanciar da classe mongoose
// além de passar o objeto, que são os campos que se quer salvar no banco, para cada receita
const RecipeSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true, // obrigatório
    },
    descricao: {
        type: String,
        required: true, // obrigatório
    },
    ingredientes: {
        type: Array,
        required: true, // obrigatório
    },
    url_fig_pequena: {
        type: String,
        required: true, // obrigatório
    },
    url_fig_grande: {
        type: String,
        required: true, // obrigatório
    },
    tempo_preparo: {
        type: String,
        required: true, // obrigatório
    },
    modo_preparo: {
        type: Array,
        required: true, // obrigatório
    },
    createdAt: {
        type: Date,
        default: Date.now, // coluna vai preencher automaticamente com a data de criação de cada receita
    }
})

// código para registrar o model na aplicação
// toda a aplicação saberá que existe um model Recipe e que contém as colunas descritas acima, na base de dados
mongoose.model('Recipe', RecipeSchema)

// também é necessário dar um require desse arquivo de model no arquivo principal (ver o require lá em server.js,
// abaixo da conexão de banco de dados)
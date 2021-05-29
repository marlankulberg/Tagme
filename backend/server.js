// importar o express utilizando o require
const express = require('express')

// importar o cors para permitir acesso externo
const cors = require('cors')

// importar o mongoose para uso do ORM, utilizando o require
const mongoose = require('mongoose')

// importar o require-dir para fazer o require das models automaticamente
const requireDir = require('require-dir')

// tendo acesso ao express define uma variavel app (const) e executar uma função express 
// INICIANDO O APP
const app = express()

// comando para permitir que se envie dados no formato json
app.use(express.json());

app.use(cors())

// INICIANDO O BANCO DE DADOS
mongoose.connect('mongodb://localhost:27017/restaurante', { useUnifiedTopology: true, useNewUrlParser: true })
    // passamos a url de conexão com o MongoDB (<protocolo>://localhost:<porta>/<nome da DB>)
    // se na instalação do mongoDB existe usuário e senha definidas então usa-se:
    // (<protocolo>://<usuario>@<senha>/localhost:<porta>/<nome da DB>)
    // Também se coloca um objeto de parâmetro para o servidor e para o construtor da conexão {useUnifiedTopology: true, useNewUrlParser: true } 
    // (versões do Mongoose podem não pedir esse comando)
    // Se o servidor estiver rodando sem erros no terminal, a conexão foi bem sucedida

// uso do requireDir para fazer o registro, no caso, a url vai só até a pasta de models
requireDir('src/models')

// o "use" é um coringa, que vai receber todo o tipo de requisição
// na função abaixo, toda vez que receber uma requisição a partir da rota api, vai mandar para o arquivo src/routes
// para visualizar, ir em localhost:<porta>/api
app.use('/api', require('./src/routes'))

// colocar a aplicação para escutar a porta 3001 do navegador
app.listen(3001)

// A partir daí, pode-se abrir o navegador no endereço http://localhost:3001 e a página vai estar escutando.
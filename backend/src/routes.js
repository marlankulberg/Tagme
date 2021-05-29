const express = require('express')

const routes = express.Router()

// importa o ProoductController para poder chamar os métodos contidos nele
const RecipeController = require('./controllers/RecipeController')

// ROTA
// chama o método index que foi feito no RecipeController
routes.get('/recipes', RecipeController.index)

// cria a rota get para buscar um único item, por ID
// poderia usar /recipes/<_id>, sendo <_id> o valor do ID
// mas para ser um rota genérica, definimos um parâmetro genérico (no caso do express, :id)
// esse :id será recuperado dentro do controller
routes.get('/recipes/:id', RecipeController.show)

// cria a rota post que serve para criar conteúdo e chama o método store do RecipeController.store
routes.post('/recipes', RecipeController.store)

// cria a rota put para atualização de itens e chama o método RecipeController.update
routes.put('/recipes/:id', RecipeController.update)

// cria a rota delete para remoção de itens e chama o método destroy
routes.delete('/recipes/:id', RecipeController.destroy)

// vai exportar o router porque ele vai ser utilizado dentro do server.js
module.exports = routes
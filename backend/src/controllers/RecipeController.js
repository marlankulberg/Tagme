// importa o mongoose porque vamos lidar com o banco de dados
const mongoose = require('mongoose')

// importa o Product de model
const Recipe = mongoose.model('Recipe')

// exporta um objeto com algumas funções:
// index vai fazer uma listagem de todos os itens que tem de produtos
// ver feature async
// também cria uma variável products que vai ser igual a await
module.exports = {
    // rota de listagem - lista os itens
    async index(req, res) {
        const recipes = await Recipe.find()
            // função find sem parâmetros, para buscar todo o conteúdo
            // função await faz com que o próximo comando (return) tenha que aguardar para 
            // a execução até que o Recipe.find
            // termine de buscar os registros no banco de dados

        // indica que quer retornar em uma estrutura json. retorna o conteudo de recipes
        return res.json(recipes)
    },

    // rota de detalhamento - mostra os dados de um único produto
    // para pegar o :id (que é um parâmetro) em vez de req.body, usa-se req.params.id
    async show(req, res) {
        const recipe = await Recipe.findById(req.params.id)

        return res.json(recipe)
    },

    // rota de atualização
    // encontra um produto que vem pelo ID que vem dos parâmetros e atualiza com o conteúdo que vem do req.body
    // está unindo a funcionalidade do show e do store
    // O objeto new: true manda que o mongoose retorne o item atualizado para dentro da variavel recipe
    // se não usar o new, o que será retornado para o recipe são as informações antes da atualização
    async update(req, res) {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false })

        return res.json(recipe)
    },

    // rota de remoção
    // não precisa declarar nada, porque não vai ter nada para retornar, pois estamos apenas removendo
    // res.send() apenas manda uma mensagem de ok, sem nenhum contéudo
    async destroy(req, res) {
        await Recipe.findByIdAndRemove(req.params.id)

        return res.send()
    },

    // rota de criação
    async store(req, res) {
        // criação
        // precisa passar todos os campos que se está enviando através do corpo da requisição.
        // O req contém todos os campos, por isso escolhe-se o req.body
        const recipe = await Recipe.create(req.body)

        return res.json(recipe)

    }
}
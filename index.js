const express = require('express') // Importa o express
const knex = require('knex') // Importa o knex
const knexfile = require('./knexfile') // Importa o arquivo de configuração do knex
const app = express()

app.use(express.json())

const db = knex(knexfile.development); // Configura o banco de dados usando knex

// Para listar todos os produtos
app.get('/products', async (req, res) => {
    try {
        const products = await db('products').select('*') // Seleciona todos os produtos do banco de dados
        res.status(200).json(products) // Retorna os produtos em formato JSON
    }
    catch (error) {
        console.error('Erro ao listar produtos:', error) // Se ocorrer um erro, imprime no console
        res.status(500).json({ message: 'Erro ao listar produtos' }) // Retorna um erro 500
    }
})

// Para listar um produto específico
app.post('/products', async (req, res) => {

    try{
        const {descricao, marca, valor} = req.body // Dados do produto
        const [id] = await db('products').insert({descricao, marca, valor}) // Insere o produto no banco de dados
        const product = await db('products').where({id}).first() // Seleciona o produto inserido
        res.status(201).json(product)
    }
    catch (error) {
        console.error('Erro ao criar produto:', error) // Se ocorrer um erro, imprime no console
        res.status(500).json({ message: 'Erro ao criar produto' }) // Retorna um erro 500
    }

})

// Para atualizar ou modificar um produto
app.put('/products/:id', async (req, res) => {
    try{
        const {descricao, marca, valor} = req.body // Dados do produto
        await db('products').where({id: req.params.id}).update({descricao, marca, valor}) // Atualiza o produto no banco de dados
        const updatedProduct = await db('products').where({id: req.params.id}).first() // Seleciona o produto atualizado
        res.status(200).json(updatedProduct) // Retorna o produto atualizado

    } 
    catch (error) {
        console.error('Erro ao atualizar produto:', error) // Se ocorrer um erro, imprime no console
        res.status(500).json({ message: 'Erro ao atualizar produto' }) // Retorna um erro 500
    }
})

// Para deletar um produto
app.delete('/products/:id', async (req, res) => {

    try {
        const deleted = await db('products').where({id: req.params.id}).del() // Deleta o produto do banco de dados
        if (!deleted) return res.status(404).json({error: 'Produto não encontrado'}) // Se o produto não for encontrado, retorna um erro 404
        res.status(204).send('Produto deletado com sucesso') // Retorna um status 204 (sem conteúdo)
    }
    catch (error) {
        console.error('Erro ao deletar produto:', error) // Se ocorrer um erro, imprime no console
        res.status(500).json({ message: 'Erro ao deletar produto' }) // Retorna um erro 500
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
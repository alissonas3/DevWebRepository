const porta = 3003

const { response } = require('express')
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

// FUNCAO MIDDLEWARE QUE VAI CHAMAR A URL ENCODED E IRA RETORNAR UMA FUNCAO MIDDLEWARE (FAZENDO UM PARSE NO BODY DA REQUISICAO).
// BODYPARSER: COMO NÃO FOI COLOCADO NENHUMA URL ESPECIFICA, PRA TODAS AS REQUISIÇÕES ELE VAI SER DISPARADO E SE O PADRÃO FOR URLENCODED ELE
// TRANSFORMA O CORPO DA REQUISIÇÃO EM OBJETOS.
app.use(bodyParser.urlencoded({ extended: true }))

// OBTER A LISTA DE PRODUTOS CADASTRADOS.
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())      // Será convertido para JSON
})

// OBTER UM PRODUTO ESPECIFICO PELO ID, EX: PRODUTO 1, PRODUTO 2...
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

// FUNÇÃO MIDDLEWARE PARA SALVAR UM NOVO PRODUTO.
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)       // IRÁ CONVERTER ESSE OBJETO PARA UM JSON.
})

// FUNÇÃO MIDDLEWARE PARA DELETAR UM PRODUTO.
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.deleteProdutos(req.params.id)       // RECEBE O ID, O DELETEPRODUTO RETORNA UM PRODUTO E MANDA NO RES.SEND O PRODUTO QUE ACABOU DE EXCLUIR COMO RESPOSTA.
    res.send(produto)       // IRÁ CONVERTER ESSE OBJETO PARA UM JSON.
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)       // IRÁ CONVERTER ESSE OBJETO PARA UM JSON.
})


app.listen(porta, () => {
    console.log(`Server is running on ${porta} port.`)
})


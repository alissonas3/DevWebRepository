const express =  require('express')            //Importar o express.
const app = express()                          //Instanciar o express e assoaciar a var app.
const bodyParser = require('body-parser')      //Import body-parser, fazendo um parse no corpo da requisição e no request.body poderá acessar todos os dados cadastrados.

app.use(bodyParser.urlencoded)({extended: true})

app.post('/usuarios', (req, resp) => {          //Atender as URL'S... Ex, usuarios,post.
    console.log(req.body)                       //Verificar o que chegou no body da requisição.
    resp.send('<h1>Cadastro realizado com sucesso!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {          //Atender as URL'S... Ex, usuarios,post.
    console.log(req.params.id)
    console.log(req.body)                       //Verificar o que chegou no body da requisição.
    resp.send('<h1>Usuário alterado com sucesso!</h1>')
})

app.listen(3003)
// Servidor para prover os dados estáticos e também os serviços de submeter um formulário.

const bodyParser = require('body-parser')
const express = require('express')
const app = express()


// Middlewares que vão ser aplicados sempre que acontecer uma requisição.
app.use(express.static('.'))        // Pega todos os arquivos estáticos (HTML, JS, JQuery, Fonts, CSS) da pasta atual.
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, error => {
        if(error) {
            return res.end('Ocorreu um erro.')
        } else {
            res.end('Concluído com sucesso!')
        }
    })
})


// app.get('/teste', (req, res) => res.send(new Date))
app.listen(8080, () => console.log('Executando...'))
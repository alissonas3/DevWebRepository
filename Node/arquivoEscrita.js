// COMO ESCREVER UM ARQUIVO USANDO O CORE DO NODE.

const fs = require('fs')

const produto = {
    nome: 'iPhone 12',
    valor: 3299.99,
    desconto: 0.15
}

fs.writeFile(__dirname + 'arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo com sucesso!')
})


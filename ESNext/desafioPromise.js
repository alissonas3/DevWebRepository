const fs = require('fs')
const path = require('path')


function conteudoArquivo(caminho) {
    return new Promise(resolve => {
        
        fs.readFile(caminho, function(_, conteudo){             // 2: Após ler o arquivo a função callback é chamada.
            resolve(conteudo.toString())                        // 3: O conteúdo é passado convertendo para string.
        })
        // console.log('Depois de ler...')       1: Imprimir no console porque ele não vai ficar esperando a excecução do código acima até ler o arquivo.
    })
}

const caminho = path.join(__dirname, 'dados.txt')

conteudoArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final e: ${conteudo}`)
    .then(console.log)

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })

}

// let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//         getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
//             getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
//             console.log(nomes)
//         })
//     })
// })

Promise.all([getTurma('A'), getTurma('B'),getTurma('C')])       // Passando um array de funcoes que retorna um promise. Ele espera e verifica se foi resolvida ou rejeitada.
    .then(turmas => [].concat(...turmas))                       // Concatenar todas as turmas em um unico array.
    .then(alunos => alunos.map(aluno => aluno.nome))            // Mapear todos os alunos e pegar apenas o nome de cada aluno.
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))                         // Tratamento de erro (reject)
    
getTurma('D').catch(e => console.log(e.message))
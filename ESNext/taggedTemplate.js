//Tagged templates - Processa o template dentro de uma funcao.

function tag (partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string...'
}

const aluno = 'Guilherme'
const situacao = 'Aprovado'

console.log(tag `${aluno} esta ${situacao}`)
const escola =
    [{

        nome: ' Turma Manhã 1',
        alunos:
            [{
                nome: 'Cido',
                nota: 7.6
            },
            {
                nome: 'Joana',
                nota: 8.5
            }]
    },

    {
        nome: 'Turma Manhã 2',
        alunos:
            [{
                nome: 'Marcia',
                nota: 4.7
            },
            {
                nome: 'Joyce',
                nota: 6.9
            }]
    }]


const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

// console.log([].concat([ 7.6, 8.5 ], [ 4.7, 6.9 ]))
console.log()

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)


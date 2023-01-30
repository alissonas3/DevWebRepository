const alunos = [
    { nome: 'Ana Clara', nota: 7.5, bolsista: true },
    { nome: 'Carlos', nota: 9.8, bolsista: false },
    { nome: 'Gabriela', nota: 5.3, bolsista: true },
    { nome: 'João', nota: 8.2, bolsista: false },
    { nome: 'Karla', nota: 3.8, bolsista: true }
]

// Todos os alunos são bolsistas?

const alunosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(alunosBolsistas))

// Algum aluno é bolsista?

const algumBosista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBosista))

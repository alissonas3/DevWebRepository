const alunos = [
    { nome: 'Ana Clara', nota: 7.5, bolsista: true },
    { nome: 'Carlos', nota: 9.8, bolsista: false },
    { nome: 'Gabriela', nota: 5.3, bolsista: true },
    { nome: 'João', nota: 8.2, bolsista: false },
    { nome: 'Karla', nota: 3.8, bolsista: true }
]

console.log(alunos.map(a => a.nota))                    // Mostrar as notas utilizando errow function com o MAP.

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log()
console.log(resultado)
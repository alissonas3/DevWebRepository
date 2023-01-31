const notas = [6.6, 7.0, 8.5, 9.9, 10.0, 3.5, 4.8, 5.9]     // ARRAY COM NOTAS

//  SEM CALLBACK.
const reprovados = []       // ARRAY PARA SER ADICIONADO OS ALUNOS REPROVADOS.

for (let i in notas) {
    if (notas[i] < 7) {
        reprovados.push(notas[i])
    }
}

console.log(reprovados)


// COM CALLBACK.
const reprovados2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(reprovados2)


const menorQueSete = notas => notas < 7
const reprovados3 = notas.filter(menorQueSete)
console.log(reprovados3)
console.log(typeof Array, typeof new Array, typeof [])

let alunosAprovados = new Array ('Bia', 'Carlos', 'Ana')            // Instanciou a partir da função array
console.log(alunosAprovados)

alunosAprovados = ['Bia', 'Carlos', 'Ana']          // Forma literal de criar array (vetor)
console.log(alunosAprovados[0])
console.log(alunosAprovados[1])
console.log(alunosAprovados[2])
console.log(alunosAprovados[3])

console.log()

alunosAprovados[3] = 'Paulo'
alunosAprovados.push('João')
console.log(alunosAprovados)
console.log(alunosAprovados.length)

console.log()

alunosAprovados[9] = 'Gabriela'
console.log(alunosAprovados.length)
console.log(alunosAprovados[8] === undefined)
console.log(alunosAprovados)

alunosAprovados.sort()                      // SORT: Faz uma alteração no array, colocando em ordem alfabética.
console.log(alunosAprovados)

delete alunosAprovados[1]
console.log(alunosAprovados[1])             // Passou a ser UNDEFINED.
console.log(alunosAprovados[2])

alunosAprovados = ['Bia', 'Carlos', 'Ana']
alunosAprovados.splice(1, 1, 'ElementoAdd1', 'ElementoAdd2')           // SPLICE: Adiciona ou remove elementos dentro do array apontando o indice. No exemplo ele começa removendo o indice 1 e termina no idice 1 e depois adiciona 2 elementos.
console.log(alunosAprovados)




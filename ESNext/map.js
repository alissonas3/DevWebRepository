const tecnologias = new Map()

tecnologias.set('angular', {framework: true})
tecnologias.set('react', { framework: false})

console.log(tecnologias.react)      // ERRADO.
console.log(tecnologias.get('react').framework)


const chavesVariadas = new Map ([
    [function() { }, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')        // A chave 123 irá substituir seu valor por valor "b" pois não é possível ter duas chaves (repetidas), mas é possível ter 2 valores iguais com chaves diferentes.
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)
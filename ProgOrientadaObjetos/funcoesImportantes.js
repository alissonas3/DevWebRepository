const pessoa = {
    nome: 'Alisson',
    idade: 28,
    peso: 93

}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))         

console.log()
console.log()

Object.entries(pessoa).forEach(e => {               // A partir desse forEach eu vou percorrer os elementos do array que foi gerado a partir do object.entries, no caso cada elementos teria 2 posições
    console.log(`${e[0]}: ${e[1]}`)
})

console.log()
console.log()

// OUTRA MANEIRA DE FAZER COM FOR EACH USANDO DESTRUCTURING - Desestruturando os elementos de um array.
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

console.log()
console.log()


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writeable: false,
    value: '01/01/2022'

    }
)

pessoa.dataNascimento = '01/01/2030'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

console.log()
console.log()

//Object.assign (ECMAScript 2015)       assign: concatenar vários objetos dentro de um só e caso tiver propriedades com o mesmo nome, serão subscritas.

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)

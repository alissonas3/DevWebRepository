const numbers = [1, 2, 3, 4, 5]

// FOR com propósito. o MAP cria um novo array com a mesma quantidade de elementos mas permite alterar os dados.

let resultado = numbers.map(function (e) {
    return e * 2
})

console.log(numbers, resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = numbers.map(soma10).map(triplo).map(paraReal)

console.log(resultado)
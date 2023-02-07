/* 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

let vetorInteiro = [1, 3, 5] 
let vetorString = ['Joao', 'Fernanda', 'Carlos']
let vetorDouble = [1.5, 2.3, 3.8]

function concat (...args) {
    resultado = []

    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }

    return resultado
}

console.log(concat(vetorInteiro, vetorDouble))
console.log(concat(vetorDouble, vetorString))
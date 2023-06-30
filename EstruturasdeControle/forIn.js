const notas = [6.0, 7.5, 3.3, 8,2, 9.6]

    for(let i in notas) {
        console.log('Elemento ' + i + ' do array:', notas[i])
    }

console.log()

const pessoa = {
    Nome: 'Carla',
    Sobrenome: 'Diaz',
    Idade: 28,
    Peso: 58
}

    for( let atributo in pessoa) {
        console.log(`${atributo} = ${pessoa[atributo]}`)
    }
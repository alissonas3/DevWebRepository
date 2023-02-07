/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

function mediaAritmetica (vetInteiros) {

    let soma = 0

    for(let i = 0; i < vetInteiros.length; i++) {
        soma += vetInteiros[i]
    }

    return soma / vetInteiros.length

}

vetor = [1, 2, 3, 4, 5]

console.log(mediaAritmetica(vetor))
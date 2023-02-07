/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

function menorEmaior (vetorInteiros) {

    let menor = 2 
    let maior = 0 

    for(let i = 0; i < vetorInteiros.length; i++) {
        
        if(vetorInteiros[i] > maior) {
            maior = vetorInteiros[i]

        } else if (vetorInteiros[i] < menor) {
            menor = vetorInteiros[i]
        }
    }

    return `Maior número encontrado dentro do vetor foi o ${maior}, e o menor foi o ${menor}`
}

vetor = [10, 19, 5, 12, 8, 25, 3, 7, 1, 18, 23]

console.log(menorEmaior(vetor))
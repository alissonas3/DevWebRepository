/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/


function numInteiro (vet) {

    let qtdNegativos = 0

    for (let i = 0; i < vet.length; i++) {

        if (vet[i] < 0) {
            qtdNegativos++
        }
    }

    return `Foram encontrados ${qtdNegativos} números negativos dentro do vetor.`
}

vetor = [3, 5, -7, 10, -3, -1, 9, 28, -30, -12]

console.log(numInteiro(vetor))
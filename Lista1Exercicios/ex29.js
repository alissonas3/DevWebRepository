/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

function intervalo (vetorNum) {

    let qtdIntervalo = 0
    let qtdForaIntervalo = 0

    for (let i = 0; i < vetor.length; i++) {
        
        if(vetorNum[i] >= 10 && vetorNum[i] <= 20) {
            qtdIntervalo++
        } else {
            qtdForaIntervalo++
        }
    }

    return `${qtdIntervalo} números dentro do intervalo e ${qtdForaIntervalo} de números fora do intervalo de 10,20.`
}

//vetor = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
vetor = [10, 2, 20, 12, 35, 6, 7, 15, 9, 18, 11, 25, 13]

console.log(intervalo(vetor))



// function observarIntervalo (vetor) {
//     qtdNumerosNoIntervalo = 0
//     for (let i = 0; i < vetor.length; i++) {
//         if(vetor[i] >= 10 && vetor[i] <= 20){
//             qtdNumerosNoIntervalo++
//         }
//     }
//     return `${qtdNumerosNoIntervalo} números dentro do intervalo.`
// }

// vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

// console.log(observarIntervalo(vetor))
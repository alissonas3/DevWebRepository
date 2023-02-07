/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/


// function mediaFinal (codigoAluno, nota1, nota2, nota3, media) {
//     while(codigo > 0) {
       
//        media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10
        
//        if (media >= 5) {
//             return 'Aluno APROVADO!'
//         } else {
//             return 'Aluno REPROVADO!'
//         }
//     }
// }

// console.log(mediaFinal(3, 6, 4, 8))
// console.log(mediaFinal(3, 10, 4, 8))
// console.log(mediaFinal(1, 6, 4, 8))

function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)
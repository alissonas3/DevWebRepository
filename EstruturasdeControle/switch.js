const resultadoFinal = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('ALUNO APROVADÍSSIMO! Quadro de honra!')
            break;
        case 8:
        case 7:
            console.log('Aluno Aprovado!')
            break;
        case 6:
        case 5:
        case 4:
            console.log('Aluno em Recuperação!')
            break;
        case 3:
        case 2:
        case 1:
            console.log('Aluno REPROVADO!')
            break;
        default:
            console.log('NOTA INVÁLIDA! Digite novamente...')
    }
}

resultadoFinal(10)
resultadoFinal(7.5)
resultadoFinal(6)
resultadoFinal(3.8)
resultadoFinal(-2)
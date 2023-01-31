Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const resultadoFinal = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Aluno APROVADÍSSIMO! Quadro de honra!')
    } else
        if (nota.entre(7, 8.99)) {
            console.log('Aluno Aprovado!')
        } else
            if (nota.entre(4, 6.99)) {
                console.log('Aluno em recuperação.')
            } else
                if (nota.entre(0, 3.99)) {
                    console.log('Aluno REPROVADO!')
                } else {
                    console.log('NOTA INVÁLIDA! Digite novamente...')
                }
}


resultadoFinal(10)
resultadoFinal(7.8)
resultadoFinal(5,9)
resultadoFinal(3.2)
resultadoFinal(11)
resultadoFinal(-8)
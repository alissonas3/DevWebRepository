function soBoaNoticia(nota) {
    if( nota >= 7) {
        console.log('APROVADO com ' + nota + '!')
    }
}

soBoaNoticia(9.9)
soBoaNoticia(5.8)

function seForVerdadeEuFalo (valor) {
    if( valor ) {
        console.log('É verdade...'  + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(1)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

// function crescimento(altura1, altura2, taxaCrescimento1, taxaCrescimento2) {

//     if (altura1 < altura2) {
//         return altura1
//     } else {
//         return altura2
//     }
// }

// console.log(crescimento(180,160))

function calcularCrescimento(altura1, taxa1, altura2, taxa2) {

    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else
            if (taxa1 < taxa2) {
                return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
            }
            else {
                return 'As crianças tem igual altura e crescimento.'
            }
    }
    else {
        if (altura1 > altura2) {
            if (taxa1 >= taxa2) {
                return 'A criança menor não ultrapassará a maior.'
            }
            else {
                return `A criança menor ultrapassará a maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos`
            }
        }
        else {
            if (taxa2 >= taxa1) {
                return 'A criança menor não ultrapassará a maior.'
            }
            else {
                return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos`
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) {

    let qtdAnos = 0

    while (alturaMenor < alturaMaior) {

        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++

    }
    //console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4));
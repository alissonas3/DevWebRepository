function mesCorrespondente (numero) {

    if (numero == 1) {
        return 'Janeiro'
    }
    else
    if (numero == 2) {
        return 'Fevereiro'
    }
    else
    if (numero == 3) {
        return 'Março'
    }
    else
    if (numero == 4) {
        return 'Abril'
    }
    else
    if (numero == 5) {
        return 'Maio'
    }
    else
    if (numero == 6) {
        return 'Junho'
    }
    else
    if (numero == 7) {
        return 'Julho'
    }
    else
    if (numero == 8) {
        return 'Agosto'
    }
    else
    if (numero == 9) {
        return 'Setembro'
    }
    else
    if (numero == 10) {
        return 'Outubro'
    }
    else
    if (numero == 11) {
        return 'Novembro'
    }
    else
    if (numero == 12) {
        return 'Dezembro'
    }
}

console.log(mesCorrespondente(1))
console.log(mesCorrespondente(4))
console.log(mesCorrespondente(8))
console.log(mesCorrespondente(12))
console.log(mesCorrespondente(3))



console.log()



function receberNomeDoMes(numero) {
    switch(numero){
    case 1:
    return "janeiro";
    case 2:
    return "fevereiro";
    case 3:
    return "março";
    case 4:
    return "abril";
    case 5:
    return "maio";
    case 6:
    return "junho";
    case 7:
    return "julho";
    case 8:
    return "agosto";
    case 9:
    return "setembro";
    case 10:
    return "outubro";
    case 11:
    return "novembro";
    case 12:
    return "dezembro";
    }
    }

console.log(receberNomeDoMes(1))
console.log(receberNomeDoMes(4))
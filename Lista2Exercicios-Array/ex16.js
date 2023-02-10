function anoBissextoCheck (ano) {

    if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)) {
        return 'TRUE! Ano Bissexto!'
    } else {
        return 'FALSE! Ano não Bissexto!'
    }

}

// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias
function checarAnoBissexto(ano) {

    return new Date(ano, 1, 29).getDate() === 29;
    
    }

console.log(anoBissextoCheck(2020))
console.log(anoBissextoCheck(2021))
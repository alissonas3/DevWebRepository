function gerarNumerosEntre(min, max, time) {

    if (min > max) {
        [max, min] = [min, max]             // Lado esquerdo nós temos o Destructuring e do lado direito temos o Array, invertendo o valores das variáveis.
    }

    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min 
            resolve(aleatorio)            
        }, time);

    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 5000),
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
    ])
}


gerarVariosNumeros()
    .then(console.log)

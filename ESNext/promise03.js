function gerarNumerosEntre(min, max) {

    if (min > max) {

        [max, min] = [min, max]             // Lado esquerdo nós temos o Destructuring e do lado direito temos o Array, invertendo o valores das variáveis.

    }

    return new Promise(resolve => {

        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min 
        resolve(aleatorio)

    })
}


gerarNumerosEntre(1, 60)
    .then(num => num * 10)              
    .then(numX10 => `O numero gerado foi: ${numX10}`)
    .then(console.log)
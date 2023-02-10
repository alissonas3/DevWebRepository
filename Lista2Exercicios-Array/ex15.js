function numerosParesIndicePar (numeros) {

    let resultado = []

    for (let i = 0; i < numeros.length; i+= 2) {
      const numeroPar = numeros[i] % 2 == 0

    if (numeroPar)
        resultado.push(numeros[i])
    }

    return resultado
}

console.log(numerosParesIndicePar([1, 2, 3, 4]))
console.log(numerosParesIndicePar([10, 70, 22, 43]))

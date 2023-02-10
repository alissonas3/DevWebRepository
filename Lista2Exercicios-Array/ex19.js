function calcularMedia (numeros) {

    const qtdNumeros = numeros.length
    let somatotal = 0

    for (let numero of numeros){
        somatotal += numero
        
    }

    return somatotal/qtdNumeros
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))

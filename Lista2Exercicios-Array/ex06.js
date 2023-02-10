function valorInverso (valor) {

    const tipo = typeof valor

    if (tipo == "boolean") {
        return !valor
    } else 
        if (tipo == "number"){
        return -valor
    }   else { 
        return `Valor booleano ou numerico esperados, mas o parâmetro é do tipo ${tipo}.`
    }
}

console.log(valorInverso(true))
console.log(valorInverso("6"))
console.log(valorInverso(-2000))
console.log(valorInverso("programação"))
function primeiroEUltimoElemento (elementos) {
    
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()

    return [primeiroElemento, ultimoElemento]

}

console.log(primeiroEUltimoElemento([7, 14, "Hey"]))


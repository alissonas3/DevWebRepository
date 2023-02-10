function numerosEntre (minimo, maximo, numero, inclusivo = false) {

    if(inclusivo) 
    
    return numero >= minimo && numero <= maximo
    
    return numero > minimo && numero < maximo
    
}

console.log(numerosEntre(10, 50, 100))
console.log(numerosEntre(16, 100, 160))

console.log(numerosEntre(10, 100, 50))
console.log(numerosEntre(16, 100, 160))
console.log(numerosEntre(3, 150, 3))
console.log(numerosEntre(3, 150, 3, true))


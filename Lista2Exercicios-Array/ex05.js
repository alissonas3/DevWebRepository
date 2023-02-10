function maiorOuIgual (numero1, numero2) {

    if(typeof numero1 != typeof numero2) 
        return false

    return numero1 >= numero2
    
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))
console.log(maiorOuIgual(3, 8))
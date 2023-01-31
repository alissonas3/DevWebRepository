let dobro = function (a) {
    return 2 * a
}


dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a          // RETURN IMPLÍCITO. NÃO NECESSARIO UTILIZAR CHAVE.
console.log(dobro(Math.PI))


/*--------------------------------*/

let ola = function () {
    return 'Ola!'
}

ola = () => 'Ola!'
ola = _ => 'Ola!'       // POSSUI UM PARAMETRO.

console.log(ola())
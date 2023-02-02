function rand ({ min = 0, max = 1000}) {            //FUNÇÃO QUE RETORNA NUMERO ALEATÓRIO DENTRO DE OPERADOR DESTRUCTOR.
    const valor = Math.random() * (max - min) + min     //CÁLCULO QUE RETORNA O INTERVALO ENTRE MIN E MAX.
    return Math.floor(valor)                            //RETORNAR O VALOR.
}

const obj = { max: 50, min: 40}                     //TESTE DA FUNÇÃO PASSANDO UM OBJETO COM OS INTERVALOS. UTILIZANDO OBJETO.
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
//console.log(rand())
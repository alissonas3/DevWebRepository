const contadorA = require ('./instanciaUnica')
const contadorB = require ('./instanciaUnica')

const contadorC = require ('./instanciaNova')()
const contadorD = require ('./instanciaNova')()

contadorA.incrementador()
contadorA.incrementador()
console.log(contadorA.valor, contadorB.valor)

contadorC.incrementador()
contadorC.incrementador()
console.log(contadorC.valor, contadorD.valor)
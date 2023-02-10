function numeroDaSorte (numero) {

   const numMin = 1
   const numMax = 10

    const numeroSorteado =  Math.floor(Math.random() * (numMax - numMin) + numMin)

    return (numero === numeroSorteado ?
         `PARABÉNS! O numero sorteado foi o ${numeroSorteado}!` :
         `Que pena! O numero sorteado foi o ${numeroSorteado}.`
 
    )
}

console.log(numeroDaSorte(10))
console.log(numeroDaSorte(5))
console.log(numeroDaSorte(3))
/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function resultadoDivisao (dividendo, divisor) {

    console.log('Resultado da divisao: ' + Math.floor(dividendo/divisor))
    console.log(`Resto da divisao:  ${dividendo % divisor}`) 
}

resultadoDivisao(8,4)
resultadoDivisao(10,4)
resultadoDivisao(8,3)



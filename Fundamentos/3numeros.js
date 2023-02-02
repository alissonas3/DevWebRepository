const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871


//FORMULA MEDIA ARITMETICA
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)

//FUNCOES COM UM TIPO DE DADO, NO CASO O NUMBER
console.log(media.toFixed(2))       // SAIDA DO VALOR COM DUAS CASAS DECIMAIS.
console.log(media.toString(2))      // CONVERTENDO O VALOR EM STRING (2) EM BINARIO.
console.log(typeof media)
console.log(typeof Number)      //FUNCTION

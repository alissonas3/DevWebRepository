// ARRAY = VETOR

const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10

console.log(valores)
console.log(valores.length)      // ACESSAR QUANTIDADE DE ELEMENTOS DO ARRAY.

valores.push({id: 3}, false, null, 'teste')     // ADICIONAR NOVOS ELEMENTOS NO ARRAY. ELE ACEITA MULTIPLOS VALORES PQ JS É TIPICAMENTE FRACO.
console.log(valores)

console.log(valores.pop())      // RETIRA UM ELEMENTO DO ARRAY.

delete valores[0]       // RETIRANDO ELEMENTO DO ARRAY POSIÇÃO ZERO.

console.log(valores)

console.log(typeof valores)     // EM JS UM ARRAY É UM OBJETO.

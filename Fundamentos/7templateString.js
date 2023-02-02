const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'
const template = `                  
    Ola
    ${nome}!`                               //TEMPLETE ACEITA DECLARAÇÃO/CONCATENAÇÃO EM MAIS DE UMA LINHA.
console.log(concatenacao, template)


// EXPRESSOES:
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()     /*FUNÇÃO up PRA PEGAR AS LETRAS E CONVERTER PARA MAIÚSCULO. EX: Texto que está passando como parâmetro ele vai pegar o texto e transformar
em maiúsculo */

console.log(`Ei... ${up('Cuidado')}!`)


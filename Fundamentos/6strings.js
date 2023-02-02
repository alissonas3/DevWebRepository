const escola = 'Cod3r'

// APLICANDO FUNÇÕES COM STRING.

console.log(escola)
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))     //VALOR DELE NA TABELA UNICODE/HTML.
console.log(escola.indexOf('3'))      //TENHO UM DIGITO E QUERO SABER EM QUAL POSICAO SE ENCONTRA.
console.log(escola.substring(1))      //APARTIR DO INDICE 1 ATÉ O FINAL.
console.log(escola.substring(0, 3))   //APARTIR DO INDICE 0 ATÉ O ÍNDICE 3 (SEM INCLUIR INDICE FINAL).

console.log('Escola '.concat(escola).concat("!")) //STRING CONCATENANDO COM UMA VARIAVEL E NOVAMENTE CONCATENANDO COM STRING.
console.log('Escola ' + escola + '!')

console.log(escola.replace(3, 'e')) //SUBSTITIUI O 3 PELA LETRA 'E'.

console.log('Ana,Maria,Pedro'.split(',')) //PEGAR STRING E TRANSFORMAR EM UM ARRAY.



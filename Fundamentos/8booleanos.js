let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!! isAtivo)         // "!"" = NEGAÇÃO. "!!"" RETORNA AO VALOR ORIGINAL, SENDO VERDADEIRO.

console.log('Os verdadeiros...')
console.log(!! 3)
console.log(!! -1)      // OBS: TODOS NÚMEROS SÃO VERDADEIROS, EXCETO O ZERO.
console.log(!! ' ')
console.log(!! [])      // ARRAY VAZIO.
console.log(!! {})      // OBJETO LITERAL.     
console.log(!! Infinity)        //OBS: TIPO INFINITO, EX: DIVISÃO POR ZERO.

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')       // STRING VAZIA.
console.log(!!null)     
console.log(!!NaN)      // NOT A NUMBER.
console.log(!!undefined)        
console.log(!!(isAtivo = false))        //ATRIBUIÇÃO DO LADO DIREITO FOR UM VALOR QUE RETORNA FALSO, O RESULTADO DA ATRIBUIÇÃO SERÁ FALSO.

console.log('Para finalizar...')
console.log(!!(' ' || null || 0 || ' '))        // STRING VAZIA OU NULO OU ZERO OU STRING COM 1 CARACTERE, O RESULTADO É VERDADEIRO PQ PELO MENOS UM É VERDADEIRO. RETORNA O PRIMEIRO VALOR VERDADEIRO.

let nome = ''
console.log(nome ||'Desconhecido')      // SE O NOME NÃO FOR DEFINIDO, RETORNAR DESCONHECIDO, SENÃO O NOME. RETORNA DESCONHECIDO PQ O NOME DEU FALSO.



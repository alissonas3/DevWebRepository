// OPÇÃO 1 PARA GERAR VALOR PADRÃO
function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma(), soma(3), soma(1,2,3), soma(0,0,0))


// OPÇÃO 2, 3 E 4 PARA GERAR VALOR PADRÃO
function soma2(a, b, c) {
    a = a !== undefined ? a: 1                              // SE A FOR != DE UNDEFINED, COM O OPERADOR TERNÁRIO ? PEGUE O VALOR DE 'A' . E SE O VALOR DE 'A' FOR UNDEFINED, A = 1.
    b = 1 in arguments ? b: 1                               // DENTRO DE ARGUMENTS EXISTE O INDICE 1? SE EXISTIR, PEGUE O VALOR DE 'B' SENÃO, PEGUE O VALOR PADRAO = 1.
    c = isNaN(c) ? 1: c                                     // SE A VARIAVEL 'C' IS NOT A NUMBER, RETORNE O VALOR PADRÃO. CASO ELA SEJA UM NUMERO, RETORNE O VALOR DE 'C'.

    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))


// OPÇÃO NOVA - VALOR PADRÃO DO ES2015
function soma3 (a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))

//TRUE OR FALSE.
                                    // == SIGNIFICA IGUAL.  === SIGNIFICA EXTREITAMENTE IGUAL.

console.log('01)', '1' == 1)        //SÃO IGUAIS POR QUE NESSE CASO ESTÁ COMPARANDO APENAS O VALOR, E NÃO O TIPO.
console.log('02)', '1' === 1)       //SÃO DIFERENTES PORQUE UM É TIPO STRING E O OUTRO É UM TIPO NUMBER.
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', '3' <= 2)
console.log('08)','3' >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)                   //COMPARANDO REFERÊNCIAS DE MEMÓRIA.
console.log('10)', d1 == d2)                    //COMPARANDO REFERÊNCIAS DE MEMÓRIA.
console.log('11)', d1.getTime() === d2.getTime())         //COMO SÃO NUMBERS, SÃO EXTREITAMENTE IGUAIS. == OU === PORQUE TEM O MESMO TIPO E O MESMO VALOR.

console.log('12)', undefined == null)
console.log('13)', undefined === null)
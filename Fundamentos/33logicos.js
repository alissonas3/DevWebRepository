function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
//  const comprarTV32 = !!(trabalho1 ^ trabalho2)       // BITWISE XOR
    const comprarTV32 = trabalho1 != trabalho2          // SE AO MENOS UM DAS DUAS CONDIÇÕES FOREM VERDADEIRAS. OPERADOR 'OU' EXCLUSIVO.
    const manterSaudadel = !comprarSorvete      // MANTER SAUDAVEL SE NENHUM DOS TRABALHOS FOR REALIZADOS, LOGO, DIFERENTE DE COMPRAR SORVETE. OPERADOR UNÁRIO.

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudadel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false))
console.log(compras(false, true))
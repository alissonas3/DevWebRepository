/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function valorReajuste (planoDeTrabalho, salarioAtual) {

    switch (planoDeTrabalho) {
        case "A":
            return salarioAtual * 1.1
        case "B":
            return salarioAtual *  1.15
        case "C":
            return salarioAtual * 1.2
        default:
            return 'Plano inválido, digite o plano referente ao funcionário novamente...'

    } 
}

console.log(valorReajuste("A", 2000))
console.log(valorReajuste("B", 2000))
console.log(valorReajuste("C", 2000))
console.log(valorReajuste("Z", 2000))
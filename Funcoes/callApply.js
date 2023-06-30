function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)} `
}

const produto = {
    nome: 'Notebook',
    preco: 4589.00,
    desconto: 0.15,
    getPreco
}

global.preco = 20
global.desconto = 0.1
console.log(getPreco())                         // CHAMAR FUNÇÃO DIRETAMENTE.
console.log(produto.getPreco())                 // CHAMAR FUNÇÃO A PARTIR DE UM OBJETO. USANDO O PRODUTO (THIS) PRA SER RESOLVIDO DENTRO DA FUNÇÃO.


// CALL APPLY

const carro = {
    preco: 69990,
    desconto: 0.20
}

console.log(getPreco.call(carro))               // CHAMAR FUNÇÃO A PARTIR DO CALL PASSANDO O OBJETO.
console.log(getPreco.apply(carro))              // CHAMAR FUNÇÃO A PARTIR DO APPLY PASSANDO O OBJETO.


// A DIFERENÇA ENTRE CALL E APPLY É COMO VOCÊ PASSA OS PARÂMETROS PRA CHAMADA DA FUNÇÃO. CALL = PASSA DIRETAMENTE DENTRO DA FUNÇAO. APPLY = PASSA OS PARAMETROS DA FUNCÃO DENTRO DE UM ARRAY.
console.log("Call: " + getPreco.call(carro, 0.17, 'R$'))
console.log("Apply: " + getPreco.apply(carro, [0.17, 'R$']))
console.log("Apply: " + getPreco.apply(global, [0.17, 'R$']))

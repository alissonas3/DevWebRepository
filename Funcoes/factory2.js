// FUNÇÃO FACTORY

function criarProduto (produto, preco, desconto = 0.1) {
    return {
        produto,
        preco,
        desconto
    }
}

console.log(criarProduto('Notebook', 6580.90))
console.log(criarProduto('iPad', 4390.90))
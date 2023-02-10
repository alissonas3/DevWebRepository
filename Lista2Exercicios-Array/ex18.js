function despesasTotais (produtos) {
    
    let total = 0

    for (let item of produtos) {
        total += item.preco
    }
    
    return total
}

console.log(despesasTotais([
    {nome: "Jornal Online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150.00},
]))

console.log(despesasTotais([
    {nome: "iPhone 14 PRO", categoria: "Eletronicos", preco: 8889.99},
    {nome: "MacBook PRO", categoria: "Eletronicos", preco: 30150.00},
]))

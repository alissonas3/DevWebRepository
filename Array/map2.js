const carrinhoCompras = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 32.50 }',
    '{ "nome": "Caixa Lapis", "preco": 28.50}',
    '{ "nome": "Canetas", "preco": 39.90}'
]

// Retornar Array somente com os preços.

const paraObj = json => JSON.parse(json)                        // 1º Passo: converte um texto para objeto usando JSON.parse.
const apenasPreco = produto => produto.preco                    // 2º Passo: recebe um produto como parametro e no final retorna apenas o preço.    

const resultado = carrinhoCompras.map(paraObj).map(apenasPreco)
console.log(resultado)
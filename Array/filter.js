const produtos  = [

  { nome: 'Notebook', preco: 7899.90, fragil: true },
  { nome: 'iPad PRO', preco: 5299.00, fragil: true },
  { nome: 'Copos de vidro', preco: 79.90, fragil: true},
  { nome: 'Copos de plastico', preco: 38.90, fragil: false },

]

console.log(produtos.filter(function(prodt){
    return false
}))

const produtoCaro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(produtoCaro).filter(fragil))


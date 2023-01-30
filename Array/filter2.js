// SIMULANDO O FILTER

Array.prototype.filter2 = function(callback) 
{
    const newArray = []

    for(let i = 0; i < this.length; i++)
    {
       if (callback(this[i], i, this))                  // Se callback retornar TRUE, esse elemento será adicionado no novo array.
       {
            newArray.push(this[i])
       }
    }

    return newArray

}

const produtos  = [

    { nome: 'Notebook', preco: 7899.90, fragil: true },
    { nome: 'iPad PRO', preco: 5299.00, fragil: true },
    { nome: 'Copos de vidro', preco: 79.90, fragil: true},
    { nome: 'Copos de plastico', preco: 38.90, fragil: false },
  
  ]
  
  const produtoCaro = produtos => produtos.preco >= 500
  const fragil = produtos => produtos.fragil
  
  console.log(produtos.filter2(produtoCaro).filter2(fragil))
  
  
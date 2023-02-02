let valor       // VARIAVEL NÃO INICIALIZADA.
console.log(valor)

valor = null        //VARIÁVEL DEFINIDA MAS COM AUSÊNCIA DE VALOR. NÃO ESTÁ APONTANDO PARA NENHUM ENDEREÇO (OBJETO) NA MEMÓRIA.
console.log(valor)

//console.log(valor.toString())       //ERRO!

const produto = {}
console.log(produto.preco)      //UNDEFINED PORQUE O PREÇO DO OBJETO PRODUTO NÃO FOI DEFINIDO.
console.log(produto)        //OBJETO VAZIO.

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined       //EVITE ATRIBUIR UNDEFINED. DEIXAR PARA A LINGUAGEM DETECTAR ISSO.
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null        //SEM PREÇO.
console.log(!!produto.preco)        //CONVERTER PREÇO PARA BOOLEAN.
console.log(produto)
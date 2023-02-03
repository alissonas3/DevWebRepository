// OBJECT.PREVENTEXTENSIONS: Permite alterar e remover atributos do objeto, não permitindo adicionar.

const Produto = Object.preventExtensions ({
    nome: 'qualquer', preco: 2.99, tag: 'promocao' 
})

console.log('Extensivel:', Object.isExtensible(Produto))
Produto.nome = 'Borracha 2 cores'
Produto.descricao = 'Apaga tinta de caneta.'
delete Produto.tag

console.log(Produto)


console.log()


// OBJECT.SEAL: Permite apenas alterar atributos do objeto. Adição e Remoção não são permitidos. 

const Pessoa = { nome: 'Bianca Rodrigues', idade: 32}
Object.seal(Pessoa)
console.log('Selado:', Object.isSealed(Pessoa))

Pessoa.idade = 28
Pessoa.profissao = 'Nutricionista'
delete Pessoa.nome

console.log(Pessoa)


// OBJECT.FREEZE: É  Sea (Selado) + valores constantes.



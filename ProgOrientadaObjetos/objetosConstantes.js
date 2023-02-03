// Objeto pessoa aponta para o endereço de memória -> 123 -> (...)
const pessoa = {nome: 'Joao'}
    pessoa.nome = 'Fabras'
console.log(pessoa)


// Objeto pessoa tentará apontar para um outro endereço de memória, por exemplo -> 456 -> (...)
//pessoa = {nome: 'Ana Claudia'}


Object.freeze(pessoa)           // freeze: congelar o objeto. não altera e nem atribui novos atributos.
pessoa.nome = 'Fernando'
pessoa.endereço = 'Rua Brasil'
console.log(pessoa)
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)


const pessoaConstante = Object.freeze({nome: 'Alisson'})
pessoaConstante.nome = 'Rodrigo'
console.log(pessoaConstante)
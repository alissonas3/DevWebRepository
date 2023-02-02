// ESSE PROGRAMA É UM NOVO RECURSO DO ES2015
// DESTRUCTURING = OPERARDOR DE DESESTRUTURAÇÃO, EX TIRAR DA ESTRUTURA (OBJETO) OU SEJA, RETIRAR DE UM OBJETO OS SEUS ATRIBUTOS.

const pessoa = {            //OBJETO CHAMADO PESSOA.
    nome: 'Ana',
    idade: 12,
    endereco: {
        logradouro: 'Rua Brasil',
        numero: 1000
    }
}

const { nome, idade } = pessoa             //DESTRUCTURING: TIRE DE DENTRO DO OBJETO (PESSOA) OS ATRIBUTOS NOME E IDADE.
console.log(nome, idade)

const { nome: n, idade: i = true } = pessoa     //DESTRUCTURING: TIRE DE DENTRO DO OBJETO (PESSOA) OS ATRIBUTOS NOME E IDADE E ATRIBUA ESSES VALORES AS VARIAVEIS n e i.
console.log(n, i)

//const { sobrenome, bemHumorada = true } = pessoa
//console.log(sobrenome.bemHumorada)

const { endereco: {logradouro, numero, cep } } = pessoa     //DESTRUCTURING: EXTRAINDO OS ATRIBUTOS DE ENDEREÇO DO OBJETO PESSOA.
console.log(logradouro, numero, cep)




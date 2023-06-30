//Coleção dinâmica de pares chave/valor.

const produto = new Object                      // CRIAÇÃO DE OBJETO A PARTIR DO 'NEW OBJECT'
    produto.nome = 'Bicicleta'
    produto.preco = 7500
    produto['marca do produto'] = 'Specialized'

console.log(produto)
delete produto.preco
console.log(produto)

delete produto['marca do produto']
console.log(produto)

console.log()
console.log()
console.log()

const carro = {                         // CRIAÇÃO LITERAL DE OBJETO.
    marca: 'Jeep',
    nome: 'Compass',
    preco:  220000,
        proprietario: {
            nome: 'Alisson',
            idade: 28,
            endereco: {
                logradouro: 'Av Brasil',
                numero: 100,

            }   
        },
        condutores: [{
            nome: 'Daniel',
            idade: 59
        },
        {
            nome: 'Sandra',
            idade: 54
        }
    ],

    // calcularValorSeguro: function () {
    //     //...
    // }

}

console.log(carro)

carro.proprietario.endereco.numero = 1724
console.log(carro)

carro['proprietario']['endereco']['logradouro'] =  'Rua Ibirapuera'
console.log(carro)

delete carro.proprietario.endereco
console.log(carro)

console.log()
console.log()
console.log()

delete carro.condutores
delete carro.proprietario
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
// console.log(carro.condutores.length)              OBS: SE TENTAR ACESSAR ATRIBUTO DE ALGUM OBJETO QUE ESETEJA UNDEFINED RETORNARÁ UM ERRO.

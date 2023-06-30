// TRANSFORMAR A CLASSE PESSOA EM UMA FUNÇÃO CONSTRUTORA.

// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }

//     falar() {
//         console.log(`Meu nome é: ${this.nome}`)
    
//     }

// }

// const p1 = new Pessoa('Carlos')
// p1.falar()


function Pessoa (nome) {

    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome e ${this.nome}`)
        
    }
}

const pessoa1 = new Pessoa('Joao Pereira')
pessoa1.falar()
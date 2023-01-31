class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é: ${this.nome}`)
    
    }

}

const p1 = new Pessoa('Carlos')
p1.falar()


//FUNÇÃO FACTORY 

const novaPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é: ${nome}`)
    }
}

const p2 = new Pessoa('Gabriela')
p2.falar()
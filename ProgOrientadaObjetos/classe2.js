class Avo {
    constructor(sobrenome) {
    this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor (sobrenome, profissao = 'Desenvolvedor') {
    super(sobrenome)
    this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Alves Silva')
    }
}

const filho = new Filho
console.log(filho)

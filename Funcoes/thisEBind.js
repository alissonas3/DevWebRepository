const pessoa = {
    saudacao: 'Bom dia!',
    falar () {
    console.log(this.saudacao)

    }

}

pessoa.falar()


const falar = pessoa.falar
falar()                         // CONFLITO ENTRE PARADIGMAS: FUNCIONAL E OO.


const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

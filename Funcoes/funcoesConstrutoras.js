function Carro(velocidadeMax = 250, delta = 5) {

    // ATRIBUTO PRIVADO
    let velocidadeAtual = 0


    // METODO PUBLICO - PODE SER ACESSADO POR FORA.
    this.acelerar = function () {
        if (velocidadeAtual <= velocidadeMax) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMax
        }

    }

    // METODO PUBLICO - PODE SER ACESSADO POR FORA.
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

//INSTANCIACAO DE OBJETOS E SUAS CHAMADAS DO ACELERAR RETORNANDO SUA VELOCIDADE ATUAL.

const Uno = new Carro
Uno.acelerar()      // CADA CHAMADA AUMENTARA A VELOCIDADE EM 5.
console.log(Uno.getVelocidadeAtual())

const Ferrari = new Carro(350, 65)
Ferrari.acelerar()       // CADA CHAMADA AUMENTARA A VELOCIDADE EM 65 COM VELOCIDADE MAX 350.
Ferrari.acelerar()
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof Ferrari)
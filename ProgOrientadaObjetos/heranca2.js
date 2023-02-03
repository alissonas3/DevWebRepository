// CADEIA DE PROTÓTIPOS (PROTOTYPE CHAIN)

Object.prototype.attr0 = '0'          // EVITAR DE FAZER ISSO.

const avo = { attr1: 'A'}
const pai = { __proto__:avo, attr2: 'B', attr3: '10'}
const filho = { __proto__:pai, attr3: 'C'}

console.log(filho.attr1) 
console.log(filho.attr0) 
console.log(filho.attr2) 
console.log(filho.attr3)


const carro = {
    velAtual: 0,
    velMax: 260,

    acelera(delta) {                                    //delta: diferença que eu quero acelerar.
        if (this.velAtual + delta <= this.velMax) {     // se a velocidade atual mais o delta é menor ou igual a velocidade maxima..
            this.velAtual += delta                      // pode acelerar...
        } else {
            this.velAtual = this.velMax                 // caso o delta mais a velocidade atual ultrapasse a velocidade maxima.. velocidade atual é a velocidade máxima.
        }
    },
    status () {
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`       
    }
}

const ferrari = {
    modelo: 'La Ferrari',
    velMax: 368         //Shadowing
}

const volvo = {
    modelo: 'XC90',
//  velMax da volvo é a velocidade padrão do objeto carro, 260km/h.
    status () {
        return `${this.modelo}: ${super.status()}`          // super: referencia o protótipo. Ou seja, estou sombreando a função status a partir do meu objeto volvo. 
    }
}


Object.setPrototypeOf(ferrari, carro)       // Estabelecer a relação de protótipo entre dois objetos (carro e ferrari), ou seja, Ferrari tem carro como seu protótipo. Equivalente ao __proto__.carro.
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)            // Acessar os atributos da Ferrari e também os atributos recebidos a partir do meu protótipo.
console.log(volvo)


volvo.acelera(100)
console.log(volvo.status())         // Nessa chamada ele retornará tanto o modelo do carro como também vai chamar o super da função status, ou seja, chamou a função status do pai como também leu a velMax que está presente a partir de herença dentro do objeto volvo. 

ferrari.acelera(300)
console.log(ferrari.status())
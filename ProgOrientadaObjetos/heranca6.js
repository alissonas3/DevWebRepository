function Aula (nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo!', 1)
const aula2 = new Aula('Até o próximo ano!', 10)
console.log(aula1, aula2)



console.log()



// Simulando a palavra reservada new.
function novo (f, ...params) {              // ... é o operador Spread e Rest
    const obj = {}
    obj.__proto__ = f.prototype             // O protótipo desse obj criado, aponte para a função.prototype (no caso função aula.prototype). 
    f.apply(obj, params)                    // Chamar a função com parametro 'f' e a função apply e vai receber o objeto (this) (que é o objeto que acabou de criar, e depois um array pra representar a lista de parâmetros que quer aplicar na função f. ) 
    return obj 

}

const aula3 = novo(Aula, 'Bem vindo!', 1)
const aula4 = novo(Aula, 'Até o próximo ano!', 10)

console.log(aula3,aula4)
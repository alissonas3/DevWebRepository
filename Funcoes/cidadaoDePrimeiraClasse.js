// FUNÇAO EM JAVASCRIPT É FIRST-CLASS OBJECT (CITIZENS)
// HIGHER-ORDER FUNCTION

// CRIAÇÃO DE FUNÇÃO DE FORMA LITERAL
function funct () {}

// CRIAÇÃO DE FUNÇÃO EM UMA VARIAVEL
const funct2 = function () { }

// CRIAÇÃO DE FUNÇÃO EM UM ARRAY (VETOR)
const arrayFunct = [function (a, b) {return a + b}, funct, funct2]
console.log(arrayFunct[0] (2,3))

// CRIAÇÃO DE FUNÇÃO E ARMAZENAR EM UM ATRIBUTO DE OBJETO
const obj = {}
obj.falar = function () { return 'OPA!'}
console.log(obj.falar())

// CRIAÇÃO DE FUNÇÃO E PASSAR COMO PARAM
function run (fun) {
    fun ()
}
run (function () {console.log('Executando..') })


// UMA FUNÇÃO PODE RETORNAR/CONTER UMA FUNÇÃO
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2,3)
const cincoMais = soma (2,3)
cincoMais(4)

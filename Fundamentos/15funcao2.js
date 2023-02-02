//ARMAZENANDO UMA FUNCAO EM UMA VARIAVEL

const imprimirSoma = function(a, b) 
{
    console.log(a + b)
}

imprimirSoma(2,3)

//ARMAZENANDO UMA FUNCAO ARROW EM UMA VARIAVEL

const soma = (a, b) => {
    return a + b
}

console.log(soma(2,8))

//RETORNO IMPLICITO 

const subtracao = (a, b) => a - b
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')
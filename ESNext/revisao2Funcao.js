// ARROW FUNCTION
const soma = (a, b) => a + b
console.log(soma(2,8))

// ARROW FUNCTION COM CORPO NA FUNÇÃO OBRIGATORIAMENTE TEM QUE COLOCAR O RETURN, EX:
const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(15,5))


// ARROW FUNCTION (THIS)
const lexico1 = () => console.log(this === exports)         // This de uma função arrow está associado ao local a função foi escrita. 
                                                            // Quando a função arrow lexico1 anomima do exemplo foi escrita diretamente
                                                            // Dentro de um modulo (arquivo) do node, sempre o this irá apontar para o obj exports.
                                                            // Se for uma função tradicional, this aponta para global.
const lexico2 = lexico1.bind({})
lexico1()
lexico2()


// PARAMETRO DEFAULT
function log(texto = 'Alôoooo Node') {          // Default você tem a capacidade de em cima de um atributo de uma função você definir um valor padrão.
    console.log(texto)
}

log()
log(null)
log(undefined)
log('Alterando o ')


// OPERADOR REST                - No contexto da função a ideia dela é você ter parâmetros variados, colocando vários parâmetros 
                                // na chamada da função e esses parâmetros serão agrupados em um array internamente dentro da função.

function total(...numeros) {    // Função total recebe um conjunto de números...
    let total = 0              // Dentro da função vai ter numeros como um array 
    numeros.forEach( element => total += element)  
    return total      // Soma acumulada (atribuição aditiva). em cima da variável total.
}
console.log(total(2,3,4,5))

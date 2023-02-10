// function menorNumero (numeros) {

//     let menor = numeros[0]

//     for (let i in numeros) 
//         if (numeros[i] < menor)
//         menor = numeros[i]
    
//     return menor

// }

function menorNumero (numeros) {

    return Math.min(...numeros);

    }

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([10, -15, 50, 3]))

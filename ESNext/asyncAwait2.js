function esperarPor(tempo = 2000) {
    
    return new Promise(function (resolve){
        
        setTimeout(() =>
            resolve()
        , tempo)

    })
}

// esperarPor()
//     .then(() => console.log('Executando Promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 3...'))



// Vamos fazer o mesmo exemplo acima usando Async/Await


function retornarValor() {                          // Promessa que está sendo devolvida a partir da função retornarValor que vai retornar o valor 10 após 5 seg.
    return new Promise(resolve =>
            setTimeout(() => resolve(10), 5000)
        )
}


async function executar() {

    let valor = await retornarValor()
   
    await esperarPor(1200)
    console.log(`Async/Await ${valor} ...`)

    await esperarPor(1200)
    console.log(`Async/Await ${valor + 1} ...`)

    await esperarPor(1200)
    console.log(`Async/Await ${valor + 2} ...`)

    return valor + 5
}

executar()
    .then(console.log)
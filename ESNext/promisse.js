function falarDepoisDe(segunos, frase) {
    return new Promise((resolve, reject)  => {
        setTimeout(() => {
            resolve(frase)
        }, segunos * 1000)
    })
}

falarDepoisDe(2, 'Executa em 2 segundos.. Nice!')
    .then(frase => frase.concat(' Chamando o then...'))     // Após resolver o setTimeOut você pode chamar o resolve e
                                                            // o resolve chama a função then. Você pode ter quantos "then" você quiser,
                                                            // uma será encadeada na outra...
    .then(outraFrase => console.log(outraFrase))       
    .catch(e => console.log(e))                             // O catch será chamado para resolver o reject do promise.
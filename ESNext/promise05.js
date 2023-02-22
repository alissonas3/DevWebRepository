function funcionarOuNao (valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{
            if(Math.random < chanceErro) {
                reject('Ocorreu um erro...')
            }
            else{
                resolve(valor)
            }
        } catch(e) {
            reject(e)  
        }
    })
}


funcionarOuNao('Realizando o teste...', 0.5)
    .then(v => `valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Ocorreu um erro inesperado: ${err}`)
    )
    .then(() => console.log('Quase fim...'))
    .catch(err => console.log(`Ocorreu um erro GERAL... ${err}`))
    .then(() => console.log('Fim!'))
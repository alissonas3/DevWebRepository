function trataErroLancar(erro) {
    throw {
        nome: erro.name,
        msg: erro.msg,
        date: new Date

    //OS ERROS PODEM RETORNAR STRINGS, BOOLEANOS, NUMBER ETC.
    //throw new Error ('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    } 
}

function imprimirNomeGritado(obj) {
    try { 
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        trataErroLancar(e)
    }
    
}

const obj = { nome: 'Alisson'}
imprimirNomeGritado(obj)

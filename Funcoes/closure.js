// CLOSURE - É O ESCOPO CRIADO QUANDO UMA FUNÇÃO É DECLARADA.
// ESSE ESCOPO PERMITE A FUNÇÃO ACESSAR E MANIPULAR VARIAVEIS EXTERNAS À FUNÇÃO.

// CONTEXTO LÉXICO EM AÇÃO!

const x = 'Global'

function fora () {
    const x = 'Local'
    function dentro () {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function aplicacaoSimples (capitalInicial, taxaJuros, tempoAplicacao) {
    
    return capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)

}

console.log('Calculo de Juros Simples: ', + aplicacaoSimples(4000, 4/100, 10));




function aplicacaoComposta (capitalInicial, taxaJuros, tempoAplicacao) {

    return capitalInicial *  (1 + taxaJuros) ** tempoAplicacao

}

console.log('Calculo de JurosCompostos: ', + aplicacaoComposta(4000, 4/100, 10))
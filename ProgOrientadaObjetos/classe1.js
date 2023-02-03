class Lancamento {
    constructor(nome = 'Generico', valor = 0) {        // A classe será transformada em uma função construtora.
        this.nome = nome                                // Receber o nome referente ao parâmetro do construtor, adicionando ao objeto que está sendo instanciado um atributo nome.
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }


    //MÉTODOS
    addLancamentos(...lancamentos)  {       // Criação de função dentro da classe Financeiro que vvai receber um ou mais lançamentos... e no final concatenar no array.
        lancamentos.forEach(l => this.lancamentos.push(l))              // Percorrer cada elemento do array e dar um push no array que pertence ao objeto.
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        
        return valorConsolidado
    }
}

const salario = new Lancamento ('Salario', 45000)
const contaLuz = new Lancamento ('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaLuz)
console.log("Salario Liquido:", contas.sumario())


// Object Literal
const objeto1 = {}
console.log(objeto1)


// Object em JS
console.log(typeof Object)
console.log(typeof new Object)

const objeto2 = new Object
console.log(objeto2)
console.log()


// Funcoes construtoras
function produto(nome, preco, des) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - des)
    }
}

const p1 = new produto('Caneta', 7.99, 0.15)
const p2 = new produto('Notebook', 8.998, 0.25)
console.log('Valor da caneta com desconto: ' + p1.getPrecoComDesconto())
console.log('Valor do notebook com desconto: ' + p2.getPrecoComDesconto())
console.log()


// Funcao factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7890, 4)
const f2 = criarFuncionario('Cida', 11400, 1)
console.log('Salario liquido funcionario 1: ' + f1.getSalario())
console.log('Salario liquido funcionario 2: ' + f2.getSalario())

console.log()

// Object.create
const filha = Object.create(null) 
filha.nome = 'Caroline'
console.log(filha)

console.log()

// Uma funcao famosa que retorna um objeto...
const fromJSON = JSON.parse('{"INFO": "Sou um JSON!"}')
console.log(fromJSON.info)
function calcularSalario (horasTrabalhadas, valorHora) {
    const salario = horasTrabalhadas * valorHora

    return `O salario do funcionario e igual a R$ ${salario}.`
}

console.log(calcularSalario(150, 40.5))



function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {

    const salarioBruto = horasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100

    return `Salário igual a R$ ${salarioLiquido}`
    }

console.log(calcularSalarioLiquido(180, 60))
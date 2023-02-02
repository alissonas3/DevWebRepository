//PAR NOME/VALOR
const saudacao = 'Opa'      //CONTEXTO LÉXICO 1

function exec()
{
    const saudacao = 'Faaala'       //CONTEXTO LÉXICO 2
    return saudacao
}

//OBJETOS SÃO GRUPOS ALINHADOS DE PARES NOME/VALOR
const cliente =                     //OBJETO CLIENTE
{
    nome: 'Marcos',
    idade: 30,
    peso: 90,
    endereco: {                     //OBJETO ENDERECO
        logradouro: 'Av Brasil',        
        numero: 500
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
//Operador ... rest(juntar) ou spread(espalhar)
//Usar rest com parametro de funcao


// Usando spread com objeto
const funcionario = { nome: 'Andre', salario: 12345.99 }
const cloneFunc = { ativo: true, ...funcionario}
console.log(cloneFunc)


// Usando spread com array
const grupoA = ['Alisson', 'Gabrielle', 'Fernando']
const grupoB = ['Bruno', ...grupoA, 'Joyce']
console.log(grupoB)
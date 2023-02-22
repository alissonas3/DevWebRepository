// Variável LET (escopo de bloco além de herdar escopo de função e escopo global).
// CONST.

{
    var a = 1
    let b = 2
    console.log(b)
}

console.log(a)  // Varivável VAR não tem escopo de bloco, consigo acessa-la de qualquer parte.


// TEMPLETE STRING.
const produto = 'iPhone'
console.log(`${produto} is not cheap!`)


// DESTRUCTURING
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

//EX 2
const [x, ,y] = [3, 2, 5]           // Com duas "," ele igonra o elemento 1 do array.
console.log(x,y)

//EX3
const {nome, idade: i } = { nome: 'Ana', idade: 18 }
console.log(nome, i)

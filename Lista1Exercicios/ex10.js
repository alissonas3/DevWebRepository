/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function divisivel(numero) {

    if (numero % 3 == 0) {
        return true
    }
    else {
        return false
    }
}

console.log(divisivel(3))
console.log(divisivel(2))
console.log(divisivel(150))
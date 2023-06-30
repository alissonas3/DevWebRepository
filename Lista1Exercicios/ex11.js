/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/


function bissexto(ano) {

    if (ano <= 0) {
        return false
    } else
        if (ano % 400 == 0) {
            return true
        } else
            if (ano % 100 == 0) {
                return false
            }
            else
                if (ano % 4 == 0) {
                    return true
                }
                else {
                    return false
                }
}

console.log(bissexto(0))
console.log(bissexto(-10))
console.log(bissexto(100))
console.log(bissexto(4))
console.log(bissexto(400))
console.log(bissexto(4000))
console.log(bissexto(100))
console.log(bissexto(800))
console.log(bissexto(2020))
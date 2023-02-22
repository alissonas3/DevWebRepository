// Nesta aula vamos construir uma função que vai fazer um PARSE em todas
// as variáveis interpoladas e vai aplicar uma máscara R$ em cima dela.

function real(partes, ...valores) {
    const resultado = []                                                // Colocar os elementos dentro de um array e depois dar um JOIN pra reconstruir a frase.
    
    valores.forEach((valor, indice) => {                                // Recebe cada um dos valores e também os índices.

        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`          // NESSA LINHA VERIFICA: Se não for um valor numérico, retorne o valor normal.. caso contrário, sendo númerico, retornar com a máscara R$.
        resultado.push(partes[indice], valor)                           // Passando partes(indice começando pelo zero), e depois o valor e vai construindo a string completa.
    })

    return resultado.join('')                                           // Vai pegar todos os elementos desse array resultado e reconstruir a string com o R$.
}

const preco = 599.99
const precoParcela = 60

console.log(real `À vista ${preco} ou 10 parcelas de ${precoParcela}.`)
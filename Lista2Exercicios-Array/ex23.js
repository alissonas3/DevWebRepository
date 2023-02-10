function quantidadePalavras (str) {

    const palavras = str.split(" ")

    return palavras.length
}

console.log(quantidadePalavras("Programacao e tudo"))
console.log(quantidadePalavras("Hoje e quinta feira"))
console.log(quantidadePalavras("Hey"))

function removerVogais (palavras) {

    return palavras.replace(/[aeiou]/ig, '')

}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))
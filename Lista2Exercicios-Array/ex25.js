function buscarPalavras(str, palavras) {

    return palavras.filter(palavra => palavra.includes(str))   

}

console.log(buscarPalavras("pro", ["programação", "mobile", "profissional", "precisão", "proplayer"]))
console.log(buscarPalavras("python", ["javascript", "java", "c++"]))
console.log(buscarPalavras("java", ["javascript", "java", "c++"]))
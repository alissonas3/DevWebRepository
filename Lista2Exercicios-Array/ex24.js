function countCharacters(character, words) {

    let count = 0

    for (let i = 0; i < words.length; i++)
        if (words.charAt(i) === character)
        count++

    return count

}


console.log(countCharacters("s", "Alisson Alves Silva"))
console.log(countCharacters("r", "A sorte acontece para alguns"))   
console.log(countCharacters("c", "Conhece-te a ti mesmo"))

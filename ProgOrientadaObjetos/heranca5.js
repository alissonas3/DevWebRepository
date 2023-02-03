console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Alisson Alves Silva'.reverse())


Array.prototype.first = function () {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())


String.prototype.toString = function () {              // Você pode substituir uma função que já existe no protótipo da String. Dentro da String prototype já tem uma função chamada to.String, você vai subescrever o comportamento de toString.
    return 'Laaascou foi tudo!'
}
console.log('Alisson Alves Silva'.reverse())

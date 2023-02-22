// o SET NÃO aceita repetições/ Não é Indexada.

const times = new Set()

times.add('Palmeiras')
times.add('Corinthians').add('São Paulo').add('Santos')
times.add('Flamengo')
times.add('Fluminense')
times.add('São Paulo')


console.log(times)
console.log(times.size)
console.log(times.has('palmeiras'))
console.log(times.has('Palmeiras'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))
console.log(times.size)


const nomes = ['Ana', 'Gabriela', 'Ana', 'Giovane']
const nomesSet = new Set(nomes)
console.log(nomesSet)
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)
pilotos.pop()                   // POP: Remove o ultimo elemento do array e retorna esse elemento.
console.log(pilotos) 

console.log()

pilotos.push('Verstappen')      // PUSH: Adiciona um elemento no array na ultima posição.
console.log(pilotos)

console.log()

pilotos.shift()                 // SHIFT: Remove o primeiro elemento do array e retornar esse elemento removido.
console.log(pilotos)

console.log()

pilotos.unshift('Hamilton')     // UNSHIFT: Adiciona um elemento na primeira posição do array.
console.log(pilotos)

console.log()

// SPLICE: Pode adicionar e remover elementos do array.

// Splice Adicionar:
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Splice Remover:
pilotos.splice(3, 1)        // Removendo Massa
console.log(pilotos)

console.log()

// SLICE: Retorna um novo array. Segundo o exemplo retornará a partir do indice 2 até o ultimo elemento.
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

// SLICE: Gerando um novo array ele pega "um pedaço" do array e retorna. A  partir do indice 1 ele vai fazer parte do array gerado, e o indice 4 que não entrará no array.
const algunsPilotos2 = pilotos.slice(1, 4)     
console.log(algunsPilotos2)


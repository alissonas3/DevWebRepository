// FOR OFF intera em cima de valores.

for (let letra of 'Cod3r') {
    console.log(letra)
}

// FOR IN percorre em cima de Índice.
const assuntoEcma = ['Map', 'Set', 'Promise']
for (let i in assuntoEcma) {
    console.log(i)
}

for (let assunto of assuntoEcma) {
    console.log(assunto)
}



const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promisse', {abordado: false}]  
])

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valores of assuntosMap.values()) {
    console.log(valores)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letras of s) {
    console.log(letras)
}

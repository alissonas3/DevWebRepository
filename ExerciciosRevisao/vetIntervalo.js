function intervaloentre (numeros) {

    let numsDentroIntervalo = 0 
    let numsForaIntervalo = 0

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] >= 10 && numeros[i] <= 20) {
            numsDentroIntervalo++
        }
        else {
            numsForaIntervalo++
        }
    }
    console.log(`Tem ${numsDentroIntervalo} numeros dentro do intervalo e ${numsForaIntervalo} numeros fora do intervalo entre 10 e 20.`)
}

vetnums = [1, 3, 7, 10, 13, 17, 15, 19, 21, 20]

intervaloentre(vetnums)
// function repetir (item, quantidade) {

//     let resultado = []

//     for(let i = 0; i < quantidade; i++) 
//         resultado.push(item)

//     return resultado

// } 

function repetir (item, quantidade){
    return Array(quantidade).fill(item)
}

console.log(repetir("codigo", 2))
console.log(repetir(7, 3))
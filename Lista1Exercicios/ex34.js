/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

function verificarString (string1, string2) {

    let contido = true;

    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        
        for( j = 0; i < string2.length; j++) {
            let caractereString2 = string2.charAt(j).toLowerCase()

            if(caractereString1 == caractereString2) {
                contido = true
                break
            } else {
                contido = false
            }
        }

        if(!contido) {
            return contido
        }
    }
    return contido
}

console.log(verificarString('abc', 'cba'))
console.log(verificarString('kfg', 'gkf'))
console.log(verificarString('kfg', 'ezy'))

const aprovadosEnem = ['Aline', 'Carol', 'Fernando', 'Jaqueline', 'Lais']

// A função CallBack que você passa para um FOREACH recebe 3 parâmetros: Nome, Indice e Array.

aprovadosEnem.forEach(function (nome, indice){
    console.log(`${indice + 1} ) ${nome}`)
    }
)

console.log()

aprovadosEnem.forEach(nome => console.log(nome))            // => Eh uma arrow function.

console.log()


// Armazenar a funcao em uma variavel e passar essa funcao por parametro (foreach)
const exibirAlunosAprovados = aprovadosEnem => console.log(aprovadosEnem)   
aprovadosEnem.forEach(exibirAlunosAprovados)
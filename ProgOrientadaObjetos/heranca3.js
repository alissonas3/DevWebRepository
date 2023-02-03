const pai = {   
    nome: 'Pedro',
    corCabelo: 'Preto'

}

const filha1 = Object.create(pai)           // Object.create: Eu passo o objeto que eu quero que seja o protótipo do objeto (pai) que está sendo criado (filha) a partir do obj.create.
    filha1.nome = 'Ana'
console.log(filha1.corCabelo)


const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writeable: false, enumerable: true }
})
console.log(filha2.nome)
filha2.nome = 'Caroline'        // Não será alterado porque o writeable está false.
console.log(filha2.nome)
console.log(`${filha2.nome} tem o cabelo ${filha2.corCabelo}.`)


console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


for (let key in filha2) {                           // For in: Verificar se determinada propriedade pertence ou não ao objeto que vc está percorrendo no momento.
    filha2.hasOwnProperty(key) ?                              // Aquela propriedade (hasOnProperty) pertence a ela (objeto)? se sim (true), mostrar na tela o nome da propriedade, senão (false) será de herança.
        console.log(key) : console.log(`Por herença: ${key}`)
}

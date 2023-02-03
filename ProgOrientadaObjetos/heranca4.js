// NESSA AULA VAMOS ENTENDER UM POUCO MAIS SOBRE FUNÇÃO E O ATRIBUTO PROTOTYPE DA FUNÇÃO.

function MeuObjeto() {

    console.log(MeuObjeto.prototype)
}

const obj1 = new MeuObjeto                  // INSTÂNCIAS DA FUNÇÃO A PARTIR DO OPERADOR NEW.
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)               //TODOS OS OBJETOS CRIADOS A PARTIR DE UMA MESMA FUNÇÃO CONSTRUTORA APONTA PARA O MESMO PROTOTIPO.
console.log(MeuObjeto.prototype === obj1.__proto__)          //QUANDO CRIADO UM OBJETO A PARTIR DE UMA FUNÇÃO CONSTRUTORA USANDO O NEW, O PROTOTIPO DESSE OBJETO AUTOMATICAMENTE APONTA PARA A FUNÇÃO QUE VC CRIOU.PROTOTYPE.

MeuObjeto.prototype.nome = 'Anônimo'                         //QUALQUER OBJETO CRIADO A PARTIR DESSA FUNÇÃO CONSTRUTORA TERÁ DENTRO DELE (PAI) PROT DESSE OBJ O ATRIBUTO NOME. 
MeuObjeto.prototype.falar = function() {                     //FALAR RECEBE UMA FUNÇÃO.
    console.log(`Bom dia! Meu nome é: ${this.nome}`)
}

obj1.falar()

obj1.nome = 'Rafael'
obj1.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

console.log()

// RESUMO.

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)

console.log(MeuObjeto.__proto__ === Function.prototype)

console.log(Function.prototype.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__ === null)



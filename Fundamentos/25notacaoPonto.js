//NOTAÇÃO PONTO: ACESSAR MEMBROS DE UMA FUNÇÃO OU OBJETO.

console.log(Math.ceil(6.1))         //OPERAR UM ARREDONDAMENTO PARA CIMA OU PARA BAIXO. MATH É UM OBJETO. CEIL PRA ACESSAR UMA FUNÇÃO DENTRO DESSE OBJETO.

const obj1 = {}
obj1.nome = 'Bola'
//obj['nome'] = 'Bola2'
console.log(obj1.nome)


function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}


const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

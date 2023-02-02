console.log(typeof Object)      //FUNCAO
console.log(typeof new Object)   //FUNCAO RECEBE UM OBJETO (INSTANCIANDO)   

const Cliente = function() {}     //CRIADO PROPRIA FUNCAO

    console.log(typeof Cliente)
    console.log(typeof new Cliente)     //INSTANCIANDO A FUNCAO


class Produto {}        // CRIADO A CLASSE
console.log(typeof Produto) 
console.log(typeof new Produto())       //INSTANCIANDO A CLASSE

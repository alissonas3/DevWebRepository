/*35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console.*/

let vetorPilha = [1, 2, 3, 4, 5]                                    //1
let vetorAdiciona = [6, 7, 8, 9, 10]                                //2


function addVetores (vetorInicial, vetorAdicionar) {                //4

    for (let i = 0; i < vetorAdicionar.length; i++) {               //5 length: Conta todos os elementos do array(vetor)
        console.log(vetorAdicionar[i])                              //6
        vetorInicial.push(vetorAdicionar[i])                        //7 push: adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
    }
 
    console.log('Vetor Adicionado: ' + vetorAdicionar)             
    console.log('Vetor resultado: ' + vetorInicial)

}

addVetores(vetorPilha, vetorAdiciona)                               //3
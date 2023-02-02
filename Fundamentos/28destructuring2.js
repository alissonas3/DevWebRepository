const [a] = [10]        //CRIANÇAO DE UMA VARIÁVEL QUE O PRIMEIRO ELEMENTO DO ARRAY É 10.
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]      /* PRIMEIRO ARRAY: IGNORADO. SEGUNDO ELEMENTO TBM É UM ARRAY, DENTRO DELE A PRIMEIRA POSIÇÃO
                                                   ESTÁ IGNORADA, OU SEJA, ESTAMOS PEGANDO O SEGUNDO ELEMENTO DO SEGUNDO ARRAY QUE ESTÁ DENTRO
                                                   DE OUTRO ARRAY. E A ATRIBUIÇÃO NO ARRAY DE FORA É COMPOSTO POR 2 ARRAYS. O PRIMEIRO É O 8, 8 E
                                                   O SEGUNDO É 9, 6, 8.*/
console.log(nota)

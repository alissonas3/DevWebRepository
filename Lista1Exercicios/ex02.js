/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/


function tipoTriangulo (vl1, vl2, vl3) {
    if (vl1 == vl2 && vl1 == vl3) {
        return 'O triangulo e do tipo EQUILATERO!'
    } else if (vl1 != vl2 && vl1 != vl3) {
        return 'O triagnulo e do tipo ESCALENO!'
    } else
        return 'O triangulo e do tipo ISOSCELES!'
}

console.log(tipoTriangulo(2,2,2))
console.log(tipoTriangulo(1,2,3))
console.log(tipoTriangulo(3,2,3))
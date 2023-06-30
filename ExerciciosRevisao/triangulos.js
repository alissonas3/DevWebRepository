function tipoTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA == ladoB && ladoA == ladoC) {
        console.log('Triangulo Equilátero!')
    }
    else
        if (ladoA == ladoC || ladoA == ladoB || ladoB == ladoC) {
            console.log('Triangulo Isósceles!')
        }
        else {
            console.log('Triangulo Escaleno!')
        }
}

tipoTriangulo(3, 3, 3)
tipoTriangulo(3, 4, 5)
tipoTriangulo(3, 3, 8)
tipoTriangulo(3, 5, 5) 
tipoTriangulo(3, 7, 3)
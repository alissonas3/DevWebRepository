function area (altura, largura) {
    const area = altura * largura
        if (area >= 20) {
            console.log(`VALOR ACIMA DO PERMITIDO! ${area}m2.`)
        } else {
            return area
        }
}

console.log(area(3,3))
console.log(area(3))
console.log(area())
console.log(area(3,5,18,20,50,2))
console.log(area(5,5))
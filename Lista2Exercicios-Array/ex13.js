function filtrarNummeros (elementos) {

    return elementos.filter(elemento => typeof elemento === 'number')

}

console.log(filtrarNummeros(["JavaScript", 1, 3, "Web", 20]))
console.log(filtrarNummeros(["a", "c"]))


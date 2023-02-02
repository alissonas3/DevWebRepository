let num1 = 1
let num2 = 2

num1++                                  // PÓS-FIXADA.
console.log(num1)
--num1                                  // A FORMA PRÉ-FIXADA TEM UMA PRECEDENCIA MAIOR DO QUE A PÓS-FIXADA.
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)

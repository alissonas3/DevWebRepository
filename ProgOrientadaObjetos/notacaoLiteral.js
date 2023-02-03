const a = 1
const b = 2
const c = 3

const object1 = {a: a, b: b, c: c}
const object2 = {a, b, c}

console.log(object1, object2)


const AttrNota = 'Nota'
const AttrValor = 8.7

const object3 = {}
object3[AttrNota] = AttrValor
console.log(object3)


const object4 = {[AttrNota]: AttrValor}
console.log(object4)


const object5 = {
    function1: function() {
        // ...
    },
    function2() {
        // ....
    }
}
console.log(object5)
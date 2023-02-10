function invert (objct) {

    const invertObject = {}

    Object.entries(objct).forEach ( keyAndValue => {
        const key = 0
        const value = 1

        invertObject[ keyAndValue[value] ] = keyAndValue[key]

    })

    return invertObject

}

console.log(invert({a:1, b:2, c:3}))
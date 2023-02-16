const _ = require('lodash') // O _ esta referenciando bibiloteca lodash e ele irá carregar o arquivo index.js dentro de nodeModules
setInterval(() => console.log(_.random(1, 1000)), 2000) // Numeros aleatorios até 10000 a cada 2 seg.


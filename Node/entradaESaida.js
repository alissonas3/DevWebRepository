const anonimo = process.argv.indexOf('-a') !== -1

console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala anonimo!\n')
    process.exit()
} else {
    process.stdout.write('Digite seu nome: ')
    process.stdin.on('data', data => {                      //ESSE EVENTO ON DATA VAI ACONTECER QUANDO DIGITA ALGO E PRESSIONA A TECLA ENTER.
        const nome = data.toString().replace('\n', '')  

    process.stdout.write(`Faala ${nome}!!!\n`)              // SAÍDA PADRÃO.
    process.exit()

    })                            
}
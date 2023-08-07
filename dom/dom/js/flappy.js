function newElement(tagName, className) {
    const element = document.createElement(tagName)
    element.className = className
    return element
}

// Funcao para criar a Barreira de acordo com o parametro se adiciona corpo/borda ou borda/corpo primeiro.
function Barreira(reverse = false) {
    this.elemento = newElement('div', 'barreira')

    const borda = newElement('div', 'borda')
    const corpo = newElement('div', 'corpo')

    this.elemento.appendChild(reverse ? corpo : borda)
    this.elemento.appendChild(reverse ? borda : corpo)

    // Altura da Barreira
    this.setAltura = altura => corpo.style.height = `${altura}px`
}

// const test = new Barreira(true)
// test.setAltura(300)
// document.querySelector('[flappy]').appendChild(test.elemento)



function BarreiraDupla(altura, aberturaEntreBarreiras, posicaoX) {
    this.elemento = newElement('div', 'barreira-dupla')

    this.superior = new Barreira(true)      /*Primeiro corpo depois a borda */
    this.inferior = new Barreira(false)     /* Primeiro borda depois o corpo */

    /* Adiciona dentro da div barreira-dupla o elemento superior e inferior */
    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    /* A abertura da barreira é fixa (passada como parametro). O cálculo é de forma aleatória de um dos lados e
    o outro lado é calculado subtraindo a altura de um dos lados - a altura da abertura e a partir disto, terá o tamanho da barreira oposta. */
    this.aberturaAleatoria = () => {
        const alturaSuperior = Math.random() * (altura - aberturaEntreBarreiras)
        const alturaInferior = altura - aberturaEntreBarreiras - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = posicaoX => this.elemento.style.left = `${posicaoX}px`
    this.getLargura = () => this.elemento.clientWidth

    this.aberturaAleatoria()
    this.setX(posicaoX)
}

// const test = new BarreiraDupla(700, 200, 800)
// document.querySelector('[flappy]').appendChild(test.elemento)




function Barreiras(altura, largura, aberturaEntreBarreiras, espacoEntreBarreiras, notificarPontuacao) {
    this.pares = [
        new BarreiraDupla(altura, aberturaEntreBarreiras, largura),
        new BarreiraDupla(altura, aberturaEntreBarreiras, largura + espacoEntreBarreiras),
        new BarreiraDupla(altura, aberturaEntreBarreiras, largura + espacoEntreBarreiras * 2),
        new BarreiraDupla(altura, aberturaEntreBarreiras, largura + espacoEntreBarreiras * 3)
    ]

    const deslocamento = 3

    // Funcao para dar animação ao game, passando por cada BarreiraDupla fazendo com que ele se desloque pegando o X atual - o Deslocamento.
    this.animacao = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            // Quando o elemento barreira sair da área do jogo, o X (barreira) é setado e volta lá pro final (há 400px da última barreira),
            // e a partir disso será sorteado uma nova aberturaEntreBarreiras.
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espacoEntreBarreiras * this.pares.length)
                par.aberturaAleatoria()
            }

            const meio = largura / 2

            // Se o X do par + Deslocamento (parametro) for maior ou igual ao Meio e a posicao X sem o Deslocamento for menor que o Meio, significa que ultrapassouMeioTela.
            const ultrapassouMeioTela = par.getX() + deslocamento >= meio && par.getX() < meio

            if (ultrapassouMeioTela) notificarPontuacao()
        })
    }
}



function Bird(alturaJogo) {
    let voar = false

    this.elemento = newElement('img', 'bird')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voar = true
    window.onkeyup = e => voar = false

    this.animacao = () => {
        const newY = this.getY() + (voar ? 8 : -5)
        const alturaMax = alturaJogo - this.elemento.clientHeight

        if (newY <= 0) {
            this.setY(0)
        } else if (newY >= alturaMax) {
            this.setY(alturaMax)
        } else {
            this.setY(newY)
        }
    }

    this.setY(alturaJogo / 2)
}



function Progresso() {
    this.elemento = newElement('span', 'progresso')
    this.notificarPontuacao = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.notificarPontuacao(0)
}



function ElementosSobrepostos(elemA, elemB) {

    const a = elemA.getBoundingClientRect()         // Retangulo associado ao elemento A.
    const b = elemB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left &&
        b.left + b.width >= a.left

    const vertical = a.top + a.height >= b.top &&
       b.top + b.height >= a.top

    return horizontal && vertical
}



function colisao(passaro, barreiras) {
    let colisao = false

    barreiras.pares.forEach(barreiraDupla => {
        if(!colisao) {
            const superior = barreiraDupla.superior.elemento
            const inferior = barreiraDupla.inferior.elemento
            colisao = ElementosSobrepostos(passaro.elemento, superior) || ElementosSobrepostos(passaro.elemento, inferior)
        }
    })

    return colisao
}



function FlappyBird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400, () => progresso.notificarPontuacao(++pontos))
    const passaro = new Bird(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        //Loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animacao()
            passaro.animacao()

            if (colisao(passaro, barreiras)) {
                clearInterval(temporizador)
            }
        }, 20);
    }
}

new FlappyBird().start()



// const testBarreiras = new Barreiras(700, 1200, 200, 400)
// const testBird = new Bird(700)
// const areaDoJogo = document.querySelector('[flappy]')

// areaDoJogo.appendChild(testBird.elemento)
// areaDoJogo.append(new Progresso().elemento)
// testBarreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))     // Para cada par de barreiras que tenha uma inferior e outra superior, adicionar ela dentro da area do jogo.

// setInterval(() => {
//     testBarreiras.animacao()
//     testBird.animacao()
//     }, 20
// )

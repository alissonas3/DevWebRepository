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

const test = new BarreiraDupla(700, 200, 800)
document.querySelector('[flappy]').appendChild(test.elemento)
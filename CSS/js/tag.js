const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',

    get (tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento =>{
    const tagName = elemento.tagName.toLocaleLowerCase()                // Pegar o nome do elemento (tag p, div, form)

    elemento.style.borderColor = colors.get(tagName)                              // Aplicar cor em cima do elemento.

    if (!elemento.classList.contains('nolabel')) {                      // Se o elemento não tiver marcado com 'nolabel'

        const label = document.createElement('label')                   // Adiciona dentro do elemento label
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])            // Antes do primeiro elemento filho que esteja "presente" na tag.
    }
})
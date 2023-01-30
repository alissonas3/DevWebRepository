// Uma FACTORY retorna um novo objeto

module.exports = () => {
    return {
        valor: 1,
        incrementador() {
            this.valor++    
        }
    }
}
class Contenedor{
    constructor(producto){
        this.id = Contenedor.globalID ++
        this.producto = producto
    }
    static productos = []
    static globalID = 1
}

module.exports = {
    Contenedor: Contenedor
}
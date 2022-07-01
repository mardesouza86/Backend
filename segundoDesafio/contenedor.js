const fs = require ('fs')

class Contenedor{
    constructor(name){
        this.name = name
    }

    // Obtengo todos los productos y los parseo a un array

    async getAll() {
        try {
            const arr = await fs.promises.readFile(this.name, 'utf-8');
            const arrParsed = JSON.parse(arr);
            return arrParsed;
        } catch (err) {
            console.log(err);
        }
    }

    // guardo por producto

    async save(objeto){
        let producto = {}
        let ultimoId = 0
        try {
            const arr = await this.getAll()
            if(arr.length > 0) ultimoId = arr[arr.length - 1].id
            if(arr){
                producto = {title: objeto.title,price: objeto.price, thumbnail: objeto.thumbnail, id: ultimoId + 1}
                arr.push(producto)
                await fs.promises.writeFile(this.name,JSON.stringify(arr))
                return producto.id
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    //obtengo por numero de ID

    async getById(number){
        try {
            const arr = await this.getAll()
            let producto = null
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id === number) {
                    producto = arr[i]
                }
            }
            return producto
        } catch (error) {
            console.log('Hubo un error al obtener el producto.');
        }
    }

    // borro por numero de ID

    async deleteById(number){
        try {
            let arr = await this.getAll()
            let newArr = []
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id !== number) {
                    newArr.push(arr[i])
                }
            }
            fs.promises.writeFile(this.nombre,JSON.stringify(newArr))
        } catch (error) {
            console.log('Hubo un error al borrar el producto.');
        }
    }
    async deleteAll(){
        try {
            fs.promises.writeFile(this.nombre,'[]')
        } catch (error) {
            console.log('No se  borraron todos los objetos.');
        }
    }
}

// Creo nuevo contenedor para productos

let contenedorUno = new Contenedor('productos.txt')

let object = {
    title: 'Lapiz',
    price: 500,
    thumbnail: 'url de la foto del producto'
}


// muestro todos los productos
async function mostrar(){
    const id = await contenedorUno.save(object);
    console.log(id);
    let productos = await contenedorUno.getAll();
    console.log(productos);
    const producto = await contenedorUno.getById(3);
    console.log(producto);
}

// ejecuto la funcion mostrar
mostrar();


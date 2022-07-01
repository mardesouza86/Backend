const express = require('express');
const fs = require('fs')


const app = express()

const PORT = process.env.PORT || 8080

let productos = []

let productoX = {}

// Defino la funcion de Obtener Productos con async / Retorno el array parseado

async function getProductos (){
    try {
        const arr = await fs.promises.readFile('productos.txt', 'utf-8');
        const arrParsed = JSON.parse(arr);
        return arrParsed;
    } catch (err) {
        console.log(err);
    }
}

//Defino como obtengo todos los productos y un X producto en particular

(async function(){
    productos = await getProductos()
    productoX = productos[Math.floor(Math.random()*productos.length)]
})();

// Pongo al server en escucha continuamente

const server = app.listen(PORT,() => {
    console.log(`Escuchando puerto ${server.address().port}`);
})

// Defino rutas del server

app.get('/productos',(req,res) => {
    res.send(productos)
})

app.get('/productoX',(req,res) => {
    res.send(productoX)
})
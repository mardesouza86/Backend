 

const Contenedor = require("./contenedor");
const express = require('express');
const app = express();
/*  Recordar que sea 8080 para glitch.me  */
const PORT = process.env.PORT || 8080;
const contenedor = new Contenedor("productos.json");

app.get('/', (req, res) => {
    res.send("<h1 style = 'color: blue;'>Bienvenido Express Server!</h1>")
});

app.get('/productos', (req, res) => {
    // Acá debo devolver un array con todos los productos
   
});

app.get('/productoX', (req, res) => {
    //devolver un producto al azar de la lista
})

app.get('/albums', (req, res) => {
    res.send('Este es tu tema elegido')
});

app.get('/object', (req, res) => {
    res.json({title: 'How We Do It ft. Pia Mia', artist: 'Sean Paul'})
});

const server = app.listen(PORT, () => {
    console.log(`>>>> Server corriendo en http://localhost:${PORT}`)
})

server.on('error', (error) => console.log(error)); 
const Contenedor = require('./contenedor')

const contenedorProducts = new Contenedor('./package.json')

contenedorProducts.save({title: 'HP'})
    .then(r => console.log(r))

contenedorProducts.deleteById(2)
    .then(r => console.log(r))
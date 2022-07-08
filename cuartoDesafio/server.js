const express = require('express')
const router = require('./routerProductos.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = process.env.PORT || 8080

app.use('/api/productos',router.router)

app.use((express.static('public')))

const server = app.listen(PORT, () => {
    console.log(`Server listening [${PORT}]...`);
})
server.on('error', e => console.log(`Error on server`,e))
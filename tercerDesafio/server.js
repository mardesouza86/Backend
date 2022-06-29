const http = require('http');

const server = http.createServer( (request, response) => {
    response.end("Quita el contenido viejo - Agrega el contenido nuevo!")
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`>>>> Este Servidor esta escuchando http://localhost:${PORT}`)
});
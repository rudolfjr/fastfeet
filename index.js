const express = require('express');

const server = express();

server.get('/users/:id', (req, res) => {
    //const nome = req.query.nome; // pegar uma tag da url, neste caso nome
    const { id }  = req.params; // pegar parametros em rota, usando o params

    return res.json({ message: `Hello ${id}` });
});

server.listen(3000);
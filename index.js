const express = require('express');

const server = express();

const users = ['Rudy', 'Fernando', 'Ric'];

server.get('/users/:index', (req, res) => {
    //const nome = req.query.nome; // pegar uma tag da url, neste caso nome
    //const { id }  = req.params; // pegar parametros em rota, usando o params
    const { index } = req.params;

    return res.json(users[index]);
    
    //return res.json({ message: `Hello ${id}` });
});

server.listen(3000);
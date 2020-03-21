const express = require('express');

const server = express();

// avisando para o express ler json
server.use(express.json());

const users = ['Rudy', 'Fernando', 'Ric'];

// listar todos os usuários
server.get('/users', (req, res) => {
    return res.json(users);
});


// listar 1 usuário
server.get('/users/:index', (req, res) => {
    //const nome = req.query.nome; // pegar uma tag da url, neste caso nome
    //const { id }  = req.params; // pegar parametros em rota, usando o params
    const { index } = req.params;

    return res.json(users[index]);
    
    //return res.json({ message: `Hello ${id}` });
});


// criar usuario
server.post('/users', (req, res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
});

// editar usuario
server.put('/users/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name;
    return res.json(users);
});

// excluir usuario
server.delete('/users/:index', (req, res) => {
    const { index } = req.params;

    users.splice(index, 1);
    return res.json(users);
});

server.listen(3000);
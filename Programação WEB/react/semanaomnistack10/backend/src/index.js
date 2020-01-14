const express = require('express'); // importando o módulo do express
const mongoose = require('mongoose');
const routes = require('./routes')
const app = express();

mongoose.connect('mongodb+srv://shepard-2209:Leo5767482200@projeto-0-qjran.azure.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);




app.listen(3333); // a porta da aplicação será a 3333

// Métodos HTTP: GET, POST, PUT, DELETE

// GET: quer dizer que estamos buscando um informação (PEGAR)
// POST: usamos quando vamos CRIAR uma informação
// PUT: editar um recurso ou informação
// DELETE: deletar uma informação

// request: parâmetro de requisição ao servidor, 
// tudo que vem do frontend através do cliente.
// response: como vamos devolver uma reposta ao cliente (frontend) 

// Tipos de parâmetros:
// Query Params: request.query (filtros, ordenação, paginação, ...)
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

const express = require("express");

const path = require('path');

const app = express();

app.use(express.static('public'));

//app.get('/', (req, res) => {
    //res.send("hola");
//});

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('./views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('./views/register.html'));
});

app.post('/', (req, res) => {
    res.sendFile(path.resolve('./views/home.html'));
});

app.listen(process.env.PORT || 3000, () =>{
   console.log('Servidor corriendo')
});
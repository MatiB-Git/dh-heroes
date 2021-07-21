const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));


app.listen(3030, () => console.log('Servidor activo'));

app.get('/', (req, res) => res.send('Bienvenidos'))

app.get('/Charles-Babbage', (req, res) => res.sendFile(path.join(__dirname, './views/babbage.html')));

app.get('/Berners-Lee', (req, res) => res.sendFile(path.join(__dirname, './views/berners-lee.html')));

app.get('/Edith-Clarke', (req, res) => res.sendFile(path.join(__dirname, './views/clarke.html')));

app.get('/Margaret-Hamilton', (req, res) => res.sendFile(path.join(__dirname, './views/hamilton.html')));

app.get('/Grace-Hopper', (req, res) => res.sendFile(path.join(__dirname, './views/hopper.html')));

app.get('/Ada-Lovelace', (req, res) => res.sendFile(path.join(__dirname, './views/lovelace.html')));

app.get('/Alan-Turing', (req, res) => res.sendFile(path.join(__dirname, './views/turing.html')));

app.get('/Home', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')));



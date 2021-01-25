const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const estadosCidadesDB = require('./Api/Data/estados_cidades.json');

app.set('port', process.env.PORT || 8080);

app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).json(estadosCidadesDB));

app.listen(process.env.PORT || 8080);

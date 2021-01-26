const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const estadosCidadesDB = require('./Api/Data/estados_cidades.json');

app.set('port', process.env.PORT || 8080);

app.use(bodyParser.json());

app.post('/', function (req, res){
    console.log(req.body);
    switch (req.body.acao) {
        case 'estados':
            res.status(200).json(estadosCidadesDB);
            break;
        case 'cidades':
            res.status(200).json(filtraCidades(req.body.estado));
            break;
    }
    
});

app.get('/', function (req, res) {
    res.status(200).json(estadosCidadesDB);
});

app.listen(process.env.PORT || 8080);

function filtraCidades(estado){
    var listaCidades = [];

    for (const estadosCidades of estadosCidadesDB.estados) {
        if(estadosCidades.sigla == estado)
            listaCidades = estadosCidades.cidades;
    }

    console.log(listaCidades);
    
    return listaCidades;
}
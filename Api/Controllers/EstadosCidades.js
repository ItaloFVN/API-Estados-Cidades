module.exports = () => {
   const estadosCidadesDB = require('../Data/estados_cidades.json');
   const controller = {};

   controller.listEstadosCidades = (req, res) => res.status(200).json(estadosCidadesDB);

   return controller;
}


module.exports = app =>{
    const controller = require('../Controllers/EstadosCidades')();

    app.route('/api/v1/estados-cidades')
        .get(controller.listEstadosCidades);
}
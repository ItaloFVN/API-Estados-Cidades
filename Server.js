const app = require('./Config/express')();
const port = app.get('port');

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
});
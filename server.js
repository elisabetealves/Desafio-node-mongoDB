const app = require('./app');

const PORT = process.env.PORT || '5050';

app.listen(port, function () {
    console.log(`App listening on port ${PORT}`)
})
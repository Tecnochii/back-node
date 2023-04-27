const express = require('express');
const conectarDB = require('../db')
const bodyParser = require('body-parser');

const app = express();

conectarDB()

app.use(bodyParser.json())

app.use("/api/persons", require('../router/Person'))

app.listen(3000, () => {
    console.log("El servidor esta ejecutandose en el puerto 3000");
})
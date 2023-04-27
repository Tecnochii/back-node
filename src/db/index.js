const mongoose = require('mongoose');

const url = "mongodb+srv://ema:NOptIur0dBx4WzOc@cluster0.dx8zh.mongodb.net/?retryWrites=true&w=majority"

async function conectarDB(){

    mongoose.connect(url)
    .then(()=>{
        console.log("Conectado existosamente a mongoDB");
    })
    .catch((error)=>{
        console.error("Error al conectar a mongoDB", error)
    })
}

module.exports = conectarDB


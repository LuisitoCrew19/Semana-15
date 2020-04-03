const mongoose = require ('mongoose');



const CamionesSchema = mongoose.Schema({
    Codigo_Camion : {
       type: String,
       required: true
    },
    Descripcion : {
        type: String,
        required: true
    },
    Nombre_Corto: {
       type: String,
       required: true
    },
    Marca : {
        type: String,
        required: true
    },
    Anio : {
        type: String,
        required: true
    },
    Placa : {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Camiones', CamionesSchema);
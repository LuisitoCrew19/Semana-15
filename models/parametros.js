const mongoose = require ('mongoose');



const ParametrosSchema = mongoose.Schema({
    Nombre_Compania : {
       type: String,
       required: true
    },
    Telefono : {
        type: String,
        required: true
    },
    Cedula_Juridica: {
       type: String,
       required: true
    },
    Mensaje_Saludo : {
        type: String,
        required: true
    },
    Direccion_Establecimiento : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Parametros', ParametrosSchema);
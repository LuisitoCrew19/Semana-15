const mongoose = require ('mongoose');

const ClientesSchema = mongoose.Schema({
    Codigo_Identificacion : {
       type: String,
       required: true
    },
    Fecha_Ingreso : {
        type: String,
        required: true
    },
    Documento_Identidad : {
       type: String,
       required: true
    },
    Primer_Apellido : {
        type: String,
        required: true
    },
    Segundo_Apellido : {
        type: String,
        required: true
    },
    Nombre : {
        type: String,
        required: true
    },

    Estado : {
        type: String,
        required: true
    },

    Telefonos : {
        type: String,
        required: true
    },

    Correo_Electronico : {
        type: String,
        required: true
    },

    Direccion : {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Clientes', ClientesSchema);
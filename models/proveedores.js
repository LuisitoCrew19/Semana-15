const mongoose = require ('mongoose');



const ProveedoresSchema = mongoose.Schema({
    Codigo_Proveedor : {
       type: String,
       required: true
    },
    Cedula : {
        type: String,
        required: true
    },
    Nombre_Proveedor: {
       type: String,
       required: true
    },
    Correo_Electronico : {
        type: String,
        required: true
    },
    Contacto : {
        type: String,
        required: true
    },
    Telefono_Contacto : {
        type: String,
        required: true
    },
    Direccion : {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Proveedores', ProveedoresSchema);
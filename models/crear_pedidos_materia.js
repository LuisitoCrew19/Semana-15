const mongoose = require ('mongoose');



const CPMSchema = mongoose.Schema({
    Orden_Pedido : {
       type: String,
       required: true
    },
    Fecha_Orden : {
        type: String,
        required: true
    },
    Proveedor: {
       type: String,
       required: true
    },
    Comprobante : {
        type: String,
        required: true
    },
    COP : {
       type: String,
       required: true
    },
    CMP : {
        type: String,
        required: true
    },
    NMP: {
       type: String,
       required: true
    },
    Cantidad_Pedir : {
        type: String,
        required: true
    },

    Estado : {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('CMP', CPMSchema);




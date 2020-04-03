const mongoose = require ('mongoose');



const BodegasSchema = mongoose.Schema({
    Codigo_Bodega : {
       type: String,
       required: true
    },
    Nombre : {
        type: String,
        required: true
    },
    Nombre_Corto : {
       type: String,
       required: true
    },
    Alias : {
        type: String,
        required: true
    },
    Ubicacion : {
        type: String,
        required: true
    },
    Unidad_Medida : {
        type: String,
        required: true
    },

    Tipo_Bodega : {
        type: String,
        required: true
    },

    Espacio_Bodega : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Bodegas', BodegasSchema);
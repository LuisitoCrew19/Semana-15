const mongoose = require ('mongoose');



const MPSchema = mongoose.Schema({
    Codigo_MP : {
       type: String,
       required: true
    },
    Nombre : {
        type: String,
        required: true
    },
    Cantidad_Existente: {
       type: String,
       required: true
    },
    Unidad_Medida : {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Materia_Prima', MPSchema);
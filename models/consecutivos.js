const mongoose = require ('mongoose');



const ConsecutivosSchema = mongoose.Schema({
    Tipo_Consecutivo : {
       type: String,
       required: true
    },
    Descripcion : {
        type: String,
        required: true
    },
    Valor_Consecutivo: {
       type: String,
       required: true
    },
    Prefijo : {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Consecutivos', ConsecutivosSchema);
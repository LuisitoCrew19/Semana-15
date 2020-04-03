const mongoose = require ('mongoose');



const TPMSchema = mongoose.Schema({
    Codigo_TPM : {
       type: String,
       required: true
    },
    Descripcion_TPM : {
        type: String,
        required: true
    }
   
});

module.exports = mongoose.model('Tipos_Materia_Prima', TPMSchema);
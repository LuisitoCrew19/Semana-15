const mongoose = require ('mongoose');



const EventosSchema = mongoose.Schema({
    Codigo_Evento : {
       type: String,
       required: true
    },
    Descripcion_Evento : {
        type: String,
        required: true
    }
   
});

module.exports = mongoose.model('Eventos', EventosSchema);
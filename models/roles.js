const mongoose = require ('mongoose');



const RolesSchema = mongoose.Schema({
    Codigo_Rol : {
       type: String,
       required: true
    },
    Nombre_Rol : {
        type: String,
        required: true
    },
    Roles_Disponibles: {
       type: String,
       required: true
    },
    Roles_Asignados : {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Roles', RolesSchema);
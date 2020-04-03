const mongoose = require ('mongoose');



const UsuariosSchema = mongoose.Schema({
    Email : {
       type: String,
       required: true
    },
    User : {
        type: String,
        required: true
    },
    Nombre: {
       type: String,
       required: true
    },
    Rol : {
        type: String,
        required: true
    },
    Password : {
        type: String,
        required: true
    },
    Estado : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Usuarios2', UsuariosSchema);
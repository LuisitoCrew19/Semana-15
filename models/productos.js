const mongoose = require ('mongoose');



const ProductosSchema = mongoose.Schema({
    Codigo_Producto : {
       type: String,
       required: true
    },
    Descripcion : {
        type: String,
        required: true
    },
    Punto_ReOrden: {
       type: String,
       required: true
    },
    Unidad_Medida : {
        type: String,
        required: true
    },
    Codigo_Producto_Detalle : {
        type: String,
        required: true
    },
    Codigo_MP : {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Productos', ProductosSchema);
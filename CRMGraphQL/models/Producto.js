const mongoose = require('mongoose');

const ProductosSchema = mongoose.Schema({

    nombre:{
        type:String,
        required: true,
        trin: true
    },
    existencia:{
        type:Number,
        required: true,
        trin: true
    },
    precio:{
        type:Number,
        required: true,
        trin: true
    },
    creado:{
        type:Date,
        default:Date.now()

    }

});

module.exports = mongoose.model('Producto', ProductosSchema);
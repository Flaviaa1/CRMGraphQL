const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({

    nombre:{
        type:String,
        required: true,
        trin: true
    },
    apellido:{
        type:String,
        required: true,
        trin: true
    },
    email:{
        type:String,
        required: true,
        trin: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
        trin: true    
    },
    creado:{
        type:Date,
        default:Date.now()

    }

});


module.exports = mongoose.model('Usuario', UsuariosSchema);
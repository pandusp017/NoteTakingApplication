const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        required:true
    }, 

    cPassword:{
        type:String,
        required:true
    }, 

})

module.export = mongoose.model('notecollection' , noteSchema)
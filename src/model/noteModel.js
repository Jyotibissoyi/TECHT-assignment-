const mongoose = require('mongoose');


const noteSchema= new mongoose.Schema({

title:{
    type:String,
    require: true
},
content:{
    type:String,
    require: true
},
isDelete:{
    type: Boolean,
    default: false
}

},{timestamps:true})


module.exports= mongoose.model("note", noteSchema);  
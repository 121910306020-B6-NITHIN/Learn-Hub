const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    pwd:{type:String,required:true},
    ads:{type:String,required:true},
    city:{type:String,required:true},
    qus:{type:String,required:true},
    key:{type:String,required:true}
})

const dataSchema=new Schema({
    Name:{type:String,required:true},
    Src:{type:String,required:true},
    Dest:{type:String,required:true},
    Content:{type:String,required:true},
    Key:{type:String}
    

})

mongoose.model('User',userSchema);
mongoose.model('Ds',dataSchema);
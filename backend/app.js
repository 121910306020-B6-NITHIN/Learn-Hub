const express=require('express')
const path=require('path')
const mongoose=require('mongoose')
const cors=require('cors')
const cookie=require('cookie-parser')
const app=express()

mongoose.connect('mongodb://localhost:27017/crud',{useNewUrlParser:true}).then(()=>(
    console.log('mongodb connected')
)).catch(err=>(
    console.log('mongo failed'+err)
));



app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use(cookie());
var corsOption={
    origin:'http://localhost:4200',
    methods:'GET,POST,PUT,DELETE',
    Credentials:true
}
app.use(cors(corsOption))

var server=app.listen(3000,()=>{
    console.log("ready on port %d",server.address().port)
});

require('./models/model');
var api=require('./routes/api');
app.use('/api',api);

module.exports = app;

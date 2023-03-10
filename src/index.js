const express= require('express');
const mongoose= require('mongoose');
const route = require('./router/route');
const PORT= 3000
const app= express();

app.use(express.json());

const DB= "mongodb+srv://Jyoticoder:Jyoti2025@jyoticoder-cluster.ljxxb2x.mongodb.net/TECHT"

mongoose.connect(DB, {useNewUrlParser:true})
  .then(()=> console.log("mongoDB is connected"))
.catch(err => console.log(err.message))

app.use('/',route)


app.listen(PORT, function(){
    console.log("express is running on "+(PORT))
})
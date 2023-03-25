const express = require('express')
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb+srv://notetakerapp:notetakerapp@cluster0.zosqwnv.mongodb.net/notedatabase?retryWrites=true&w=majority').then(()=>{
    console.log('connection successful')
}).catch((err)=>{
    console.log('connection failed')
})



app.get('/',(req,res)=>{
    res.send('hello note app')
})

app.get('/login',(req,res)=>{
    res.send('hello login note app')
})

app.get('/signup',(req,res)=>{
    res.send('hello signup note app')
})

app.listen(5000, ()=>{
    console.log('listening port nmbr 5000')
})
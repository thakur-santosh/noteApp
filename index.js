const express = require('express')
const app = express()
const port = 3015
const mongoose = require('../noteApp/config/database')
const router = require('../noteApp/config/route')
const Note = require('./app/model/Notemodel')
app.use(express.json())


app.get('/',(req,res) =>{
    res.json({
        note : 'Welcome to note taking app'
    })
})

app.use('/',router)

app.listen(port , (req,res) =>{
    console.log('Connected to port : ' , port)
})
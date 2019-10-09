const express = require('express')
const app = express()
const port = 3015
const mongoose = require('mongoose')
app.use(express.json())

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/note-app', { useUnifiedTopology: true, useNewUrlParser : true})
.then(connection =>{
    console.log('Connected to database')
})
.catch(err =>{
    console.log(err)
})

const Schema = mongoose.Schema
const noteSchema = new Schema({
    title :{
        type : String,
        required : true

    },
    description : {

        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})
 
const Note = mongoose.model('Note',noteSchema)



app.get('/',(req,res) =>{
    res.json({
        note : 'Welcome to note taking app'
    })
})

app.get('/notes',(req,res) =>{
    Note.find()
    .then(note =>{
        res.json(note)
    })
    .catch(err =>{
        res.json(err)
    })
})

app.post('/notes',(req,res)=>{
    const body = req.body
    const note = new Note({
        title : body.title,
        description : body.description
    })

    note.save()
    .then(note =>{
        res.json(note)
    })
    .catch(err =>{
        res.json(err)
    })
})


app.listen(port , (req,res) =>{
    console.log('Connected to port : ' , port)
})
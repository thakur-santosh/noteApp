const Note = require('../model/Notemodel')

// note list
module.exports.list = (req,res) =>{
    Note.find()
    .then(note =>{
        res.json(note)
    })
    .catch(err =>{
        res.json(err)
    })
}

// note post
module.exports.add = (req,res)=>{
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
}



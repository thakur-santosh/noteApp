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
        description : body.description,
        category : body.category
    })

    note.save()
    .then(note =>{
        res.json(note)
    })
    .catch(err =>{
        res.json(err)
    })
}

module.exports.show = (req,res) =>{
    const id = req.params.id
    Note.findById(id)
    .then(note =>{
        if(note){
            res.json(note)
        }else {
            res.json({})
        }
    })
    .catch(err =>{
        res.json(err)
    })
}



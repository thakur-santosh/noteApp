const Category = require('../model/Category')

module.exports.list = (req,res) =>{
    Category.find()
    .then(category =>{
        res.json(category)
    })
    .catch(err =>{
        res.json(err)
    })
}

module.exports.add = (req,res) =>{
    const body = req.body
    const category = new Category({
        name : body.name
    })

    category.save()
    .then(category =>{
        res.json(category)
    })
    .catch(err =>{
        res.json(err)
    })

}

module.exports.show = (req,res) =>{
    const id = req.params.id
    Category.findById(id)
    .then(category =>{
        if(category){
            res.json(category)
        }else {
            res.json({message : 'id not found or deleted'})
        }
    })
    .catch(err =>{
        res.json(err)
    })
}

module.exports.update = (req,res) =>{
    const {body} = req
    const {id} = req.params
    Category.findByIdAndUpdate(id,body, {new : true , runValidators : true})
    .then(category =>{
        if(category){
            res.json(category)
        }else {
            res.json({})
        }
    })
    .catch(err =>{
        res.json(err)
    })
}

module.exports.destroy = (req,res) =>{
    const id = req.params.id
    Category.findByIdAndDelete(id)
    .then(category =>{
        res.json(category)
    })
    .catch(err =>{
        res.json(err)
    })
}
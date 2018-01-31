const mongoose = require('mongoose');

//get model from mongoose library  +++ CHANGE THIS PER PROJECT

const Author = mongoose.model('Author');

module.exports= {
    all: function(req,res){
        Author.find({})
        .then(
            data => res.json({message : "Success", authors: data})
        )
        .catch(
            error => res.json({message : "Error", error:error})
        )
    },

    getOne: function(req,res){
        Author.findOne({_id:req.params.id})
        .then(
            data => res.json({message : "Success", author: data})
        )
        .catch(
            error => res.json({message : "Error", error:error})
        )
    },

    create: function(req,res){
        Author.create(req.body)
        .then(
            data => res.json({message : "Success", author: data})
        )
        .catch(
            error => res.json({message : "Error", error:error})
        )
    },

    update: function(req,res){
        Author.update({_id: req.body._id}, req.body)
        .then(
            data => res.json({message : "Success", author: data})
        )
        .catch(
            error => res.json({message : "Error", error:error})
        )
    },

    removeAuthor: function(req,res){
        Author.remove({_id:req.params.id})
        .then(
            data => res.json({message : "Success", author: data})
        )
        .catch(
            error => res.json({message : "Error", error:error})
        )
    }


}
const authors = require('./../controllers/authors.js');
const path = require('path');

module.exports = function(app){
//create an author
    app.post('/author', (req,res)=>{
        authors.create(req,res);
    })
//del an author
    app.delete('/author/:id', (req,res)=>{
        authors.removeAuthor(req,res);
    })
//get all authors
    app.get('/authors', (req,res)=>{
        authors.all(req,res);
    })
//get one author
    app.post('/author/:id', (req,res)=>{
        authors.getOne(req,res);
    })

    app.put('/author', (req,res)=>{
        authors.update(req,res);
    })

    app.patch('/author/:id', (req,res)=>{
        authors.pushQuote(req,res)
    })

// catch all 
    app.post('*', (req,res)=>{
        authors.sendFile(path.resolve('./public/dist/index.html'));
    })
}




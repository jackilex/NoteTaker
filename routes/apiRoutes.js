const notes=require('../db/db.json')
const express = require("express");
const app = express();

app.use(express.json())

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
// to get all notes from db.json
// path for getting all data and posting to data is the same
app.get('/api/notes',(req,res)=>{
    res.json(notes)
})

//adding notes
app.post('/api/notes',(req,res)=>{
if (!req.body.title || !req.body.text){
    //error
    return res.status(404).send('Must add a title and Notes to text area')
}
    const thisNote={
    title: req.body.title,
    text:req.body.text,
    id:req.body.id
    }
    notes.push(thisNote)
    res.json(notes)
})

// path for getting ONE data and deleting ONE data is the same
//get single note
app.get('/api/notes/:id',(req,res)=>{
//getting a boolean result
const lookUp= notes.some(note=>note.id === parseInt(req.params.id))
if (lookUp){
res.json(notes.filter(note=> note.id === parseInt(req.params.id)))
}else{
    return res.status(404).send('This note was not saved')
}

})

app.delete('/api/notes/:id',(req,res)=>{
    const note= notes.find(note => note.id === parseInt(req.params.id));
    if(!note) return res.status(404).send('not found')

    //delete
    const index= notes.indexOf(note);
    notes.splice(index,1);

    res.send(notes)

    })

}


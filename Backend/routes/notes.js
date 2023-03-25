const express = require('express');

const router = express.Router()

const Note = require('../models/note')

router.get('/', async(req,res)=>{
    try{
        const notes = await Note.find();
        res.json(notes)
    }catch(err){
res.status(500).json({message:err.message})
    }
})

router.post ('/', async (req, res)=>{
    const note = new Note({
        title:req.body.title,
        content:req.body.content
    })

    try{
        const newNote = await note.save();
        res.status(201).json(newNote);

    }catch(err){
        res.status(400).json({message:err.message})
    }
})

router.get('/:id', getNote, (req,res)=>{
    res.json(res.note)
})

router.patch('/:id', getNote, async(req,res)=>{
   if(req.body.title !=null){
    res.note.title = req.body.title;
   }


if(req.body.content !=null){
    res.note.content =req.body.content
}

try{
    const updatedNote = await res.note.save();
    res.json(updatedNote)
}catch(err){
    res.status(400).json({message:err.message})
}

})

router.delete('/id', getNote,async (req,res)=>{
    try{
        await res.note.remove();
        res.json({message:"Note deleted"})
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

async function getNote(req,res,next){
    let note;
    try{
        note = await Note.findById(req.params.id);
        if(note ==null){
            return res.status(404).json({message:err.message})
        }
    }catch{
        return res.status(500).json({message:err.message})
    }

    res.note = note;
    next()
}

module.exports =router;
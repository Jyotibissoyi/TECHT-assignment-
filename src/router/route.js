const express = require("express");
const router= express.Router();

const {createNote, getNote, updateNote,deleteteNote}= require('../controller/note'); //import module






router.post('/create', createNote);  //CTREATE

router.get('/getNote/:id',getNote);  //FETCH

router.put('/update/:id', updateNote);  //UPDATE

router.delete('/delete/:id',deleteteNote);  //DELETE








 module.exports= router;  //export module
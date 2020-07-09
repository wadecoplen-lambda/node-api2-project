
const express = require('express');
const router = express.Router();
const db = require('../data/db')

//CRUD- CREATE
router.post('/', (req, res) => {
   db.insert(req.body)
   .then(item => {
       res.status(201).json({Message: 'Created'})
   })
   .catch(error => {
       console.log(error)
       res.status(400).json({errorMessage: 'Please provide title and contents'})
   })
   .catch(error => {
       res.status(500).json({serverError: 'The was an error while saving the post the database'})
   })
})
//==========================================
router.post('/:id/comments', (req, res, next)=> {
    db.insert(req.body)
    .then(item => {
        res.status(201).json(item)
    })
    .catch(error => next(err))
    
    next()
})
//=========================================

//CRUD - READ
router.get('/', (req, res, next) => {
    db.find()
    .then(item => {
        res.status(200).json(item)
    })
        .catch(error => next(error))        
    })
module.exports= router;
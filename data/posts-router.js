const express = require('express');
const router = express.Router();
const db = require('./db')


//CRUD- READ
router.get('/', (req, res) => {
    res.status(200).json({message:'Hello from the GET /posts endpoint'})
})


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

//
module.exports= router;
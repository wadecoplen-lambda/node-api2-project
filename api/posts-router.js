
const express = require('express');
const router = express.Router();
const db = require('../data/db')

//CRUD- CREATE
router.post('/', (req, res) => {
    const {title, contents} = req.body;
    if(!title) {
        res.status(200).json({message: 'Hey fuckhead give me a title'})
    } else {
        db.insert({title, contents})
        .then(item => {  
            res.status(200).json({item: {item}})
        })
        .catch(error => {
            res.status(500).json(error)    
        })
    }
  
})
//==========================================
router.post('/:id/comments', (req, res) => {
    const comment = { ...req.body, post_id: req.params.id };
  
    db.insertComment(comment)
    .then(item => {
      res.status(201).json(item);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'There was an error while saving the comment to the database',
      });
    });
  });
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
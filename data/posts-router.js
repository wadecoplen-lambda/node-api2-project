const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({message:'Hello from the GET /posts endpoint'})
})

module.exports= router;
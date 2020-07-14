const express = require('express');
const postsRouter = require('./api/posts-router')
const server = express();


server.use(express.json());
server.use('/api/posts', postsRouter)

server.get('/', (req, res) => {
    res.send('I am here')
})
module.exports = server;
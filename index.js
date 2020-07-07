const express = require('express');
const postsRoutes = require('./data/posts-router')
const server = express();

server.use('/api/posts', postsRoutes);
const PORT = 5000;
// server.get('/', (req, res) => {
//     res.send('I am here')
// })
server.listen(PORT, () => {
    console.log(`server is listen on ${PORT}`)
})

module.exports = server;
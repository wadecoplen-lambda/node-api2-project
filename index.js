
const server = require('./server')

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`server is listen on ${PORT}`)
})

module.exports = server;
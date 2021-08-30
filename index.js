// import the server and start it
console.log('web45 SUPER is awesome!')

const server = require('./api/server') // pulling express application in

// starting on server
server.listen(5000, () => {
    console.log('Listening on port 5000')
})
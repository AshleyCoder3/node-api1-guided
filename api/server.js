// IMPORTS AT THE TOP
const express = require('express') // import express from 'express' //ES6

// INSTANCE OF EXPRESS APP
const server = express()

// GLOBAL MIDDLEWARE--- something we always do with express application
server.use(express.json()) // this teacher express to read JSON from reqs

// ENDPOINTS

// [GET] /api/dogs (R of CRUD, fetch all dogs)
server.get('/api/dogs', (req, res) => { // req- client sends from client to server. res-server to client
    res.json({ message: 'GET all dogs working!' })
})
// [GET] /api/dogs/:id (R of CRUD, fetch dog by :id)
server.get('/api/dogs/:id', (req, res) => {
    res.json({ message: 'GET dog by id is working' })
})
// [POST] /api/dogs (C of CRUD, create new dog from JSON payload)
server.post('/api/dogs', (req, res) => {
    res.json({ message: 'POST new dog working' })

})
// [PUT] /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
server.put('/api/dogs/:id', (req, res) => {
    res.json({ message: 'UPDATE/PUT is working' })
})

// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)
server.delete('/api/dogs/:id', (req, res) => {
    res.json({ message: `deleted dog with id ${req.params.id}` })
})
// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server // export default server //ES6
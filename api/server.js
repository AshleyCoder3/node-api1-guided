// IMPORTS AT THE TOP
const express = require('express') // import express from 'express' //ES6
const Dog = require('./dog-model') // Dog now contains object full of async modules from file
// INSTANCE OF EXPRESS APP
const server = express()

// GLOBAL MIDDLEWARE--- something we always do with express application
server.use(express.json()) // this teacher express to read JSON from reqs

// ENDPOINTS 

// [GET] /api/dogs (R of CRUD, fetch all dogs)
server.get('/api/dogs', (req, res) => { // req- client sends from client to server. res-server to client
    Dog.findAll()
        .then(dogs => {
            res.status(200).json(dogs)
        })
        .catch(err => {
            res.status(500).json({ message: err.message }) //({message: 'ARG'})Hard code or err.message
        })
})
// [GET] /api/dogs/:id (R of CRUD, fetch dog by :id)
server.get('/api/dogs/:id', (req, res) => {
    // res.json({ message: 'GET dog by id is working' })
    const { id } = req.params // gather into from the req object
    // use that info to query the db using helper
    Dog.findById(id)
        .then(dog => {
            if (!dog) {
                //id might not have existed in db
                res.status(404).json({ message: `dog ${id} not found` })
            } else {
                //send happy response
                res.status(200).json(dog)
            }
        })
        .catch(err => {
            //Super sad path
            res.status(500).json({ message: err.message })
        })

})
// [POST] /api/dogs (C of CRUD, create new dog from JSON payload)
server.post('/api/dogs', (req, res) => {
    //res.json({ message: 'POST new dog working' })
    const { name, weight } = req.body
    // res.json({ name, weight })
    Dog.create({ name, weight })
        .then(dog => {
            res.status(201).json(dog)
        })
        .catch(err => {
            //Super sad path
            res.status(500).json({ message: err.message })
        })


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
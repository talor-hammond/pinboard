const express = require('express')
const server = express()

// MIDDLEWARE
server.use(express.static('public'))

// ROUTES
server.get('/', function(req, res) {

    res.send('Hello');

})
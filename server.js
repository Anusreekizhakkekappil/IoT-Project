///var http = require('http');
//http.createServer(function(req, res) {
//    res.window.location = "/index.html";
//}).listen(8080);

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'patient_details';
const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    client.close();
});

const users = []

let http = require('http').createServer(app);
let io = require('socket.io')(http);


app.use(express.urlencoded({ extended: false }))

app.get('/register', function(request, response) {

})

//socket test
io.on("connection", (socket) => {
    console.log('user connected')
})

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/loggedin', (req, res) => {
    res.render('loggedin.html')
})

app.post('/loggedin', (req, res) => {

})

app.listen(8080)
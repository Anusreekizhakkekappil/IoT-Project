var http = require('http');
http.createServer(function(req, res) {
    res.window.location = "/welcome.js";
}).listen(8080);
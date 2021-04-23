var http = require('http');
http.createServer(function(req, res) {
    res.window.location = "/index.html";
}).listen(8080);
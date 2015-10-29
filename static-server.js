var static = require('node-static');

var fileServer = new static.Server('./');

console.log("Visit http://10.6.128.10:8080/test/test_blanket.html")
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(8080);
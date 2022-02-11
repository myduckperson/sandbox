const http = require('http');
const dt = require('./exports');
const fs = require('fs');

http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write(req.url);
    // res.write("The date and time are currently: " + dt.myDateTime());
    // res.end();
    fs.readFile('../index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
}).listen(3000); 
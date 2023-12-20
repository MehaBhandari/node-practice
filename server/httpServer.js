let http = require('http');
let fs = require('fs')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    switch(req.url) {
        case '/': 
            fs.readFile('index.html', (err, data) => {
                res.write(data.toString());
                res.end();
            });
            break;
        case '/emp': 
            res.write('This is emp page\n');
            res.end();
            break;
    }
    // res.write(req.url);
}).listen(8080);
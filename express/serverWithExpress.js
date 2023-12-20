let express = require('express');
let fs = require('fs');

let app = express();
let port = process.env.port || 3000;

app.get('/', (req, res) => {
    fs.readFile('welcomePage.html', (err, data) => {
        if(err) {
            res.send(err);
        } else {
            res.send(data.toString());
        }
    })
});

app.listen(port, () => {
    console.log('App started...')
})

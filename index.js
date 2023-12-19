var fs = require('fs');
fs.readFile('./index.html', (err, data) => {
    console.log('This is async data')
    console.log(data.toString());
});

let htmlData = fs.readFileSync('./index.html');
console.log('This is sync data')
console.log(htmlData.toString());

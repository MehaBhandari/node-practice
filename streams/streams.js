let fs = require('fs');
let zlib = require('zlib');

fs.createReadStream('index.js')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('otherIndex.js.gz'))
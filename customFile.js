let fs = require('fs');

fs.appendFile('newFile.html', '<h2>This is created by command</h2><br/>', (err) => {
    console.log('err: ', err);
});

fs.appendFile('newAsyncFile.html', '<h2>This is created by command</h2><br/>', (err) => {
    console.log('err: ', err);
});

fs.appendFileSync('newSyncFile.txt', 'This is sample Async file\n');

fs.readFile('newFile.html', (err, data) => {
    if(err) {
        console.log('err: ', err);
    } else {
        console.log('data: ', data.toString());
    }
})
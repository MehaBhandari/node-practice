// CallBack Hell example
let fs = require('fs');
fs.appendFile('CURDoperations.txt', 'This is sample file\n', (err) => {
    if(err) {
        console.log('err: ', err);
    } else {
        fs.readFile('CURDoperations.txt', (err, data) => {
            if(err) {
                console.log('err: ', err);
            } else {
                console.log('Data: ', data.toString());
                fs.rename('CURDoperations.txt', 'file.txt', (err) => {
                    if(err) {
                        console.log('err: ', err);
                    } else {
                        console.log('File has been renamed...');
                        fs.unlink('file.txt',(err) => {
                            if(err) {
                                console.log('err: ', err);
                            } else {
                                console.log('File has been Deleted!!!!!!!!!!!!!')
                            }
                        })
                    }
                })
            }
        })
    }
    
});

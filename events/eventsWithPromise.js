let fs = require('fs');

let readFileDataPromise = new Promise((resolve, reject) => {
    fs.readFile('customFile.js', (err, data) => {
        if(err) {
            // console.log('This is err: ', err);
            reject(err);
        }
        // console.log('Data is: ', data.toString());
        resolve(data.toString());
    })
});

readFileDataPromise.then((data) => {
    console.log('Promise is subscribed with data: ', data)
}, (err) => {
    console.log('Error is: ', err);
})

function reusablePromise(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if(err) {
                reject(err);
            }
            resolve(data.toString());
        })
    })
}

// let reusableFilePromise = reusablePromise('index.js');
reusablePromise('index.js').then((data) => {
    console.log('Promise is subscribed with data: ', data.toString());
}, (err) => {
    console.log('Error is: ', err);
})

function reusablePromiseWithParams(fileName, sucessData, errFn) {
    let newPromise = new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if(err) {
                reject(err);
            }
            resolve(data.toString());
        })
    })
    newPromise.then(sucessData, errFn)
}

let sucessData = (data) => {
    console.log('Promise is subscribed with data: ', data.toString());
}

function errFn(err) {
    console.log('Error is: ', err);
}

reusablePromiseWithParams('index.js', sucessData, errFn)
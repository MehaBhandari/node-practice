let EventEmitter = require('events').EventEmitter;
let fs = require('fs');

const eventEmitter = new EventEmitter();

fs.readFile('./customFile.js', (err, data) => {
    if(err) {
        console.log('err: ', err);
    } else {
        eventEmitter.emit('mayank', data.toString());
        eventEmitter.emit('Meha', 'This is string');
        eventEmitter.emit('obj', {name: "Ram", age: 10});
    }
})

eventEmitter.on('mayank', (data) => {
    console.log('data: ', data);
});
eventEmitter.on('Meha', (data) => {
    console.log('Meha: ', data)
});
eventEmitter.on('obj', (data) => {
    console.log('Obj: ', data);
})


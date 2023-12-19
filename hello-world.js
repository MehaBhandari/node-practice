const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World\n');
})

server.listen(4242, () => {
    console.log('Server is running...')
});

console.log('Current user is: ', process.env.USER);
console.log('\nScript executed with: ')
console.log('VAL1 equals to: ', process.env.VAL1);

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(chunk !== null) {
        process.stdout.write(chunk)
    }
})

setTimeout(() => process.exit(), 2000);
process.on('exit', () => {
    console.log('Process will exit now. See you later!!');
});
console.log('Hello');
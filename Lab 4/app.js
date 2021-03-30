//Lab 4
//Question 1
console.log('Hello World');

//Question 2
const os = require('os');

console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());
console.log('Uptime : ' + os.uptime());

for (const cpu of os.cpus()) {
    console.log(cpu);
}

//Question 3
const fs = require('fs');
// fs module support Synchronous operations
fs.readFile('test.txt', 'utf-8', (err, data) => {

    //err = null => false
    //err = undefined => false
    //err = '' => false
    //err = false => false
    //err = 0 => false
    if (err) {
        console.error(err);
        return;
    }

    console.log(data.toString());
    // console.log(data.toString('utf-8'));
});

//Question 4
// const fs = require('fs');
const readStream = fs.createReadStream('test.txt');
const writeStream = fs.createWriteStream('test-copy.txt');

readStream.addListener('end', () => {
    console.log('End of the File read!');
});

writeStream.addListener('close', () => {
    console.log('End of the File write!');
    console.log(fs.readFileSync('test-copy.txt', 'utf-8'));
});

readStream.pipe(writeStream);

//Question 5
const http = require('http');

// http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1>Hello World!</h1>')
//     res.end();
// }).listen(3000, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Server listening on 3000');
// });

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
        case 'PUT':
            req.on('data', data => {
                res.write('<h1>Put request received with : ' + data + '</h1>');
                res.end();
            });
    }
}).listen(3000, (err) => {
    console.log('Server is listening to port 3000')
});
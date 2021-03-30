const cluster = require('cluster');
const http = require('http');
const os = require('os');

const cpus = os.cpus().length;


if (cluster.isMaster) {
    console.log('Master is running on ' + process.pid);

    for (let i = 0;i < cpus;i++){
        cluster.fork();
    }

} else {
    http.createServer((req, res) => {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>This is from the process ' + process.pid + '</h1>');
        res.end();
    }).listen(3000);
    console.log('Slave is runnig on ' + process.pid);
}
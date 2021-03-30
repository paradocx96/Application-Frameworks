const {workerData, parentPort} = require('worker_threads');

//Do all the CPU heavy task

parentPort.postMessage({hello: workerData});
parentPort.postMessage({World: workerData});
parentPort.postMessage({Welcome: workerData});
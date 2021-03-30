const {Worker} = require('worker_threads');

function runWorker(workerData) {
    return new Promise(((resolve, reject) => {
        let collection = [];
        const worker = new Worker('./service.js', {workerData});
        // worker.on('message', resolve);
        worker.on('message', data =>{
            collection.push(data);
        });
        worker.on('error', reject);
        worker.on('exit', code => {
            if (code !== 0){
                reject(new Error('Worker stopped with non-zone exit code ' + code));
                return;
            }

            // console.log('Exit');
            resolve(collection);
        });

    }));
}

async function run() {
    const result = await runWorker('World');
    console.log(result);
}

run().catch(err => console.log(err));
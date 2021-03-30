const EventEmitter =  require('events');

class SampleEmitter extends EventEmitter {}

const sampleEmitter = new SampleEmitter();

sampleEmitter.on('done', data =>{
    setImmediate(()=> console.log(data));
    // console.log(data);
});

sampleEmitter.on('done', data =>{
    console.log('Hello');
});

sampleEmitter.emit('done','This is firing the event');
sampleEmitter.emit('done','This is firing the event 2');
sampleEmitter.emit('done','This is firing the event 3');
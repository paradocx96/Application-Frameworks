// Additional
//Error
console.error(new Error('Something Wrong!'));

// ==========
// fs module support Synchronous operations
const fs = require('fs');

const data = fs.readFileSync('test.txt');
console.log(data.toString());
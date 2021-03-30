const fs = require('fs'),
    os = require('os');

const writeStream = fs.createWriteStream('./Lec6_1.txt');

writeStream.write('Node JS is awesome.');

// End of Line (EOL) for any OS
writeStream.write(os.EOL);

writeStream.write('This is coming from a Stream.');
writeStream.close();

writeStream.on('close', () => {
    const data = fs.readFileSync('./Lec6_1.txt');
    console.log(data.toString());
});


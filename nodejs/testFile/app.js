var fs = require('fs');

var streamFetch = fs.createReadStream(__dirname + '/test.txt',
                        {encoding: 'utf8', highWaterMark: 3 * 1024});

var writeStream = fs.createWriteStream(__dirname + 'test_writer.txt');                       

streamFetch.on('data', function(chunk) {
    console.log(chunk.length);
    writeStream.write(chunk);
})

streamFetch.pipe(writeStream);
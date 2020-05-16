var fs = require("fs");  

// var data = fs.readFileSync('input.txt');
// console.log('Finished synchronous data');
// console.log('Program ended');


console.log('Entering async mode')

function readFile(callback) {
    fs.readFile('input.txt',(err,data) => {
        if(err) {
             console.log("error => ", err);
             callback(err,null);
        } else  {
            callback(null,data);
            console.log('finished reading the aynchronous data');
        }
        console.log('completed reading data')
    })
    
}
console.log('End of file')

function doWork() {
    readFile((err,data) => {
        if(err) {
            console.log(err);
        } else {
            console.log(data.toString());
        }

    })
}

doWork()

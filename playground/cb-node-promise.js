var fs = require("fs");  

// var data = fs.readFileSync('input.txt');
// console.log('Finished synchronous data');
// console.log('Program ended');


console.log('Entering async mode')

function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('input.txt',(err,data) => {
            if(err) {
                // console.log("error => ", err);
                reject(err);
            } else  {
                resolve(data);
                console.log('finished reading the aynchronous data');
            }
            console.log('completed reading data')
        })
        });
    }
console.log('End of file');

readFile()
.then(data =>  {
        console.log('Finally understood little bit of promises !!')
        console.log(data.toString())
    })
.catch(err => console.log(err))
.finally(() => console.log("Nothing to clean up in finally"));
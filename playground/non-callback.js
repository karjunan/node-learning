
function doWork() {
   var result =  fetchData()
   console.log("fetched data => ", result); 
   console.log("ready to do some other work");
   return result;
}

function fetchData() {
    var counter = 0;
    for(var i = 0 ; i < 10000000000; i++) {
        counter = counter + i;
    }
    return counter;
}

let result = doWork();
console.log(result);
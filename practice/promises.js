
const doWork = (callback) => {

    setTimeout(() => {
        console.log('done with settimeout');
        // callback('error', undefined); 
        callback(undefined, 'this was successfull');
    }, 2000);

}

doWork((error, result) => {

    if(error) {
        console.log(error);
    } else {
        console.log(result);
    }

});
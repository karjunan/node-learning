
const add = (val1,val2, callback) => {
    console.log('timeout triggered');
    setTimeout(() => {
        callback(undefined,val1 + val2);
    }, 200);

}

add(1,2,(error, res) => {
    if(error) {
        return console.log('error budd')
    }
    console.log('Sum is => ' , res);
})
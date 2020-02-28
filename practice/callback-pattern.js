

const add = (val1,val2, callback) => {
    console.log('timeout triggered');
    setTimeout(() => {
        callback(val1 + val2);
    }, 2000);

}

add(1,2,(sum) => {
    console.log('Sum is => ' , sum);
})
const add = (a,b) => {
    return new Promise((accept,reject) => {
        setTimeout(() => {

            if( a < 0 || b < 0 ) {
                reject('Negative number');
            }
            accept(a+b);    
        }, 1000);
        
    })
}



const doWork = async () => {
    const sum = await add(-1,2);
    const sum1 = await add(sum,3);
    return sum1;

}

// console.log(doWork());
doWork().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log('exception' , e);
})
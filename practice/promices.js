
new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Call successfull');
        // reject('error ');
    }, 1000);

}).then((data) => {
    console.log(data);
}) .catch((e) => {
    console.log('exception ', e);
})

// prom.then((data) => {
//     console.log(data)
// }).catch((e) => {
//     console.log('error printing', e);
// })
function test() {

   setTimeout(() => {
    console.log("test");
   }, 1000); 
}

function test1() {
    console.log('test1');
}

test();
test1();

module.exports = {test,test1}
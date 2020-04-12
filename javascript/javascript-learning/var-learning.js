
var a = 100;

if( true) {
    var a = 200;
}

function foo() {
    console.log(fooVar);
    if(true) {
        var fooVar = 1000;
    }
    console.log(fooVar);
  
}

console.log(a)
foo()

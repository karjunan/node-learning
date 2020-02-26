const func = function(x) {
    return x * x;
}

// const name = 'krishna'

const birthday = {
    name : 'rajesh',
    printFunction() {console.log(this.name)}
    
}
birthday.printFunction();

console.log(func(10));


const temp = process.argv
// console.log(temp)
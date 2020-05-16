let person = {"name": "krishna","age": 32}
let person1 = {"name": "Ram","age": 36}

let p = function print(arg) {
    console.log("hello", this.name, arg);
}

p();
p.call(person, "how are you" );
p.call(person1," Looks like cool innovations");

console.log(unescape("%20"))

function printName (name = 'krishna', stupid) {
    return "you crazy => " + name + stupid
}

let mes = printName('lokesh', 'kumar ')
console.log(mes)

function rom(...greet) {
    greet.forEach(name => console.log(name))
}

rom('kumar',1,23)

var id = Symbol('id');
var id1 = Symbol('id');

var id3 = Symbol.for('id')
var id2 = Symbol.for('id')
console.log("Symbol is equal => "  , id2 == id1);
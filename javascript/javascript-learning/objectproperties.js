
let person = {  
    firstName: "krishna",
    lastName: "Arjunan"
};

console.log(person.firstName);
console.log(person['firstName'])

for( let p in person) {
    console.log(person[p]);
}

console.log(Object.getOwnPropertyDescriptor(person,'firstName'));
console.log(Object.getOwnPropertyDescriptor(person,'lastName'));


Object.defineProperty(person,'firstName', {writable: false});

console.log(Object.getOwnPropertyDescriptor(person,'firstName'));

delete person.firstName;

for( let p in person) {
    console.log(p);
}

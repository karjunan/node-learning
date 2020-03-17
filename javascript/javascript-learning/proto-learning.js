
function person(firstName, lastName) {
  this.firstName = firstName,
  this.lastName = lastName

}
person.prototype.age = 10;

console.log(person.prototype)
const user = new person('krishna','arjunan');
const user1 = new person('lokesh','chander');

console.log(user);
console.log(user1);
user.__proto__.age = 100
user1.age = 20
user.age = 20

console.log(user);
console.log(user1);
console.log(user1.__proto__);

console.log('User has age property => ', user.hasOwnProperty('age'))


console.log(person.prototype === user.__proto__)
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 0;
    }

    get fullName() {
        return this.firstName +' ' +this.lastName;
    }

    isAdult() {
        if(this.age > 18)
        return 'Matured';
        else return 'IMMature';

    }

}


let krishna = new Person('krishna','kumar');
krishna.age = 17
console.log(krishna.fullName);

console.log(krishna.isAdult())

let date = new Date(2020,);
console.log(date.toString());
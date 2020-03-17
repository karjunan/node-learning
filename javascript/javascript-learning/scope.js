'use strict'

const person = {

    firstName : "krishna",
    lastName: "Arjunan",
    age : 18,
    isAdult : function () {return person.age > 18;}
    
}

function registerUser(fname, lname) {

    const person = {
        fname,
        lname
    }

    for(let propertyName in person) {
        console.log('Property Name => ' , propertyName);
    }
    return person;
}

function func () {
    console.log(person.isAdult()  )  
}

// func();

const user = registerUser('krishna','kumar')

console.log(user)

console.log(Object.keys(user))

console.log(Object.is(2,3))

Object.assign(person,user)

console.log('Person data => ' , person)


function constUser(fname, lname) {
    this.fstName = fname,
    this.lstName = lname
}

const u = new constUser('Ram','Ahuja');

console.log(u)



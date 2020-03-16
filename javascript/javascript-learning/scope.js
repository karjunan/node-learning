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


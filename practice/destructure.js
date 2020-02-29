
const fname = 'Rajesh';
const myName = {
    fname
}

console.log(' destructuring => ', myName.fname);


const product = {
    id: 1,
    pName: 'krishna',
    age : 35
}

const {id: productId,name,age } = product;

console.log(productId);

const func = (name, {id,pName}) => {

    console.log(id,'+ = +' ,pName)
} 

func('ram',product)
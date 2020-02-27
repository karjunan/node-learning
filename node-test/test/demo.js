
const add = (x,y) => {
      return x + y;      
} 

const callbackAdd = ( a, b,callback) => {

      setTimeout(() => {
            return callback(null,a+b);
      }, 200);

}

const promiseAdd = (a,b) => {
      // return Promise.reject(new Error('error'))
      return Promise.resolve(a+b);
}

const logFunc = () => {

      console.log('log logged');
      console.warn('log warned');
}

module.exports =  {add,callbackAdd,promiseAdd,logFunc}

const request = require('request')


const forecast = ({lattitude,longitude}, callback) => {
// function (data, callback)  {
//  console.log('Before forecasting => '+ JSON.stringify(lattitude)) 
console.log(lattitude, longitude);  
const url = 'https://api.darksky.net/forecast/600d550d714baa516f318ed17f591f3e/'+ lattitude +','+longitude+'';

console.log( ' URL ' + url);
    request({ url, json: true }, (error,response) => {
        console.log('ERROR => ' + error);
        if(error) {
            callback('Not able to connect to the system');
        } else {
            console.log(response.body)
            callback(undefined,response.body);
        }

    })


} 

module.exports =  {forecast};


const request = require('request')


const URL = "https://api.darksky.net/forecast/600d550d714baa516f318ed17f591f3e/37.8267,-122.4233";

request({url:URL}, (error,response) => {
    const body = JSON.parse(response.body)
    console.log(response);
})
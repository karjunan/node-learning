const express = require('express')

const app = express();


app.get('',(request,response) => {

    response.send("welcome to my express page");

})

app.listen(3000, () => {
    console.log('app started on port 3000')
})
const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.headers, " ---- " , req.method);
    console.log(req.url);
    if(req.url === '/') {
        res.write("<html>")
        res.write("<head> <title> This is awesome learning !!</title></head>")
        res.write('<body><form action="/message" method="POST"> <input type="test" name="message"> <button type="submit">Send</button></form></body>')
        res.write('</html>')
        res.end();
    } else if(req.url === '/message') {
        console.log("read the message");
        let data = "";
        req.on('data', (chunk) => {
            data += chunk;
        })
        req.on('end', ()=> {
        //     res.write("<html>")
        //     res.write("<head> <title> This is awesome learning !!</title></head>")
        //     res.write('<body>')
        //     res.write(data);
        //     res.write('</body>')
        //     res.write('</html>')
        //     res.end(); 
           console.log(data);
        })
        
        res.statusCode = 302
        res.setHeader('Location', '/');
        res.end();
       
    }
    
   
});

server.listen(3000);

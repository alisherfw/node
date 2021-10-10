const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("Home Page");
    }
    else if(req.url === '/about') {
        for(let i = 0; i < 1000; i++)
            for(let j = 0; j < 1000; j++) 
                console.log(`${j}, ${i}`);
        res.end("About Page");
    } 
});

server.listen(5000, () => {
    console.log('server is running on port: 5000');
})
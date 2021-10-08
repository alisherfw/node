const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Home Page');
    }
    if(req.url === '/about') {
        res.end('About Page');
    }
    res.end(`<h1> OOps! </h1>
    <p> 404 error. Page not found! </p>
    <a href="/"> Back to the Home </a>`);
});

server.listen(3000);
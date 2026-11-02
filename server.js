const http= require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.write('My first page');
    res.write('My second page\n');
    res.write('My third page\n');
    res.end('This is my page');
});
server.listen(4000, ()=> console.log('Server running at http://localhost:4000'));
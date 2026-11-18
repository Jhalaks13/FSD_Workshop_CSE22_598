
const http = require('http');


const server = http.createServer((req, res) => {

    
    res.writeHead(200, { 'Content-Type': 'text/html' });

    
    res.end(`
        <html>
        <head>
            <title>HTTP Server</title>
        </head>
        <body>
            <h1>Welcome to My HTTP Server!</h1>
            <p>This server is running successfully on Node.js.</p>
        </body>
        </html>
    `);
});


server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

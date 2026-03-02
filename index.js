// Import the built-in 'http' module in Node.js
const http = require('http');

// Create an HTTP server
http.createServer((req, res) => {
  // Set the HTTP response header with status 200 (OK) and content type as HTML
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Send the response body "Hello World!" and end the response
  res.end('Hello World!');
  
// The server will listen for requests on port 3000
}).listen(3004);
var express = require("express");
var http = require("http");
var app = express();

// Logging middleware
app.use(function(request, response, next) {
  console.log("In comes a " + request.method + " to " + request.url);
  console.log("The server is working" + request.url);
  next();
});

// Send "hello world"
app.use(function(request, response) {
console.log("The server is working" + request.url);
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello world!\n");
});

http.createServer(app).listen(8000);
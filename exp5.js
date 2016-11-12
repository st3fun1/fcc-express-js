var express = require("express");
var http = require("http");
var app = express();

app.all("*", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  next();
});

app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) {
  response.end("Welcome to the about page!");
});

app.get("/hello", function(request, response) {
//   response.end("Hello, " + req.params.who + ".");
//   response.redirect("http://www.myanimelist.com");
    response.end("Your IP adress is: " + request.ip);
});

app.get("*", function(request, response) {
  response.end("404!");
});


http.createServer(app).listen(process.env.PORT);
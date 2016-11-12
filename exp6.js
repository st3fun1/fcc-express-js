var http = require("http");
var exp = require("express");
var app = exp();

app.set("views",__dirname + "/views");
app.set("view engine","pug");

app.get("/",function(req,res){
   res.render("index",{"message":"I love coding!"}); 
});

http.createServer(app).listen(process.env.PORT);
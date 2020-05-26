const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.get("/", function(req, res) {
  return res.send("hello");
})

server.listen(5000, function(){
  console.log("Servidor rodando...🚀") 
})

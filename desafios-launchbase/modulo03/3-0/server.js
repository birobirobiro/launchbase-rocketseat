const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const data = require("./data")

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express:server,
  autoescape: false,
  noCache: true
})

server.get("/", function(req, res) {
  return res.render("index", {data});
})

server.get("/receitas", function(req, res) {
  return res.render("receitas", {recipes: data});
})

server.get("/recipes/:index", function (req, res) {
  const recipes = data // Array de receitas carregadas do data.js
  const recipeIndex = req.params.index;

  return res.render("recipes", {recipe: recipes[recipeIndex]})
})

server.get("/sobre", function(req, res) {
  return res.render("sobre", {data});
})

server.listen(5000, function(){
  console.log("Server is running...🚀") 
})
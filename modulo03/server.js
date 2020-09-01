const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data")

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express:server,
  autoescape: false
})

server.get("/", function(req, res) {
  const about = {
    avatar_url: "https://avatars2.githubusercontent.com/u/22185823?s=400&u=3187113eec6ce4161d62d1860d505a23c4752c05&v=4",
    name: "João Inácio",
    role: "Community Experience - Rocketseat",
    description: 'Full Stack Developer, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>',
    links: [
        { name: "Github", url: "https://github.com/birobirobiro" },
        { name: "Twitter", url: "https://twitter.com/birobirobiro_/" },
        { name: "Linkedin", url: "https://linkedin.com//in/joaoinacioneto/" }
    ],
  }
  return res.render("about", { about })
})

server.get("/portfolio", function(req, res) {
  return res.render("portfolio", {items: videos})
})

server.listen(5000, function(){
  console.log("Servidor rodando...🚀") 
})

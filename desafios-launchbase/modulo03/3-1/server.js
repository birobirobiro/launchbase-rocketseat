const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express:server,
  autoescape: false,
  noCache: true
})

server.get("/", function(req, res) {
  const courses = [
    {
      id: "starter",
      logo: "img/starter.svg",
      price: "FREE",
      modules: "80 módulos",
      description: "Cursos 100% online e gratuitos para você entrar com o pé direito nas tecnologias mais desejadas do mercado."
    },
    {
      id: "lauchbase",
      logo: "img/launchbase.svg",
      price: "R$ 800,00",
      modules: "60 módulos",
      description: "LaunchBase é o bootcamp da Rocketseat voltado para quem está iniciando na programação. Você irá aprender HTML, CSS, JavaScript, Banco de dados Relacional e introdução ao NodeJS."
    },
    {
      id: "gostack",
      logo: "img/gostack.svg",
      price: "R$ 1.000,00",
      modules: "300 módulos",
      description: "GoStack é o bootcamp da Rocketseat voltado para quem já manja de programação. Nele você irá aprender a stack ReactJS, React Native, TypeScript e NodeJS."
    } 
    
    ]
  return res.render("courses", {courses});
})

server.get("/about", function(req, res) {
  const about = { 
        logo: "img/logo.jpg", 
        links: [
        {
          name: "Github",   
          url: "https://github.com/rocketseat/"
        },
        {
          name: "Instagram", 
          url: "https://instagram.com/rocketseat_oficial/"
        },

        {
          name: "Facebok",
          url: "https://facebook.com/rocketseat/"
        }
      ],
      techs: [
        "ReactJS", 
        "React Native", 
        "NodeJS", 
        "TypeScript"
      ],
      description: `Transforme sua carreira e seja um programador desejado no mercado, dominando as ferramentas mais modernas de desenvolvimento web e mobile.`
    }

  return res.render("about", {about});
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, function(){
  console.log("Server is running...🚀") 
})

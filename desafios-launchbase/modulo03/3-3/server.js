const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const courses = require("./data")

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express:server,
  autoescape: false,
  noCache: true
})

server.get("/", function(req, res) {
  return res.render("courses", {courses});
})

server.get("/courses/:id", function(req, res) {
  const id = req.params.id

  const course = courses.find(course => course.id === id);

  if (!course) {
      return res.send("Curso não encontrado.")
  }
  
  return res.render(`${id}`)
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

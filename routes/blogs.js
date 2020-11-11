const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const blogs = mongoose.model("Blogs");
/**
 * blogs/ => all blogs
 * blogs/178637763567 => blog
 *
 */
route.get("/:id", function (req, res) {
  const id = req.params.id;

  blogs.find({ _id: id }).then((_blog) => {
    console.log("azes", _blog);
    res.send({ _blog });
  });
});
route.get("/", function (req, res) {
  
  try{blogs

    .find()
    
    .then((result) => {
      console.log(result);
      res.send(result);
    }).catch(error=>{
      console.log(error);
    })}
    catch{console.log("aaaaaa");}
    
});

route.post("/add", function (req, res) {
  const post = {
    titre: req.body.titre,
    auteur: req.body.auteur,
    date_creation: Date.now(),
    content: req.body.content,
    tags: req.body.tags,
    related: req.body.related,
    comments: req.body.comments,
    description: req.body.description,
  };
  blogs.create(post);
});

// // localhost/blogs/blog
// route.get("/blog", function(req, res) {

// });

module.exports = route;

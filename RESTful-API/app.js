const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require('mongoose');
const _=require('lodash');
mongoose.set('useFindAndModify', false);
const e = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser:true,useUnifiedTopology:true});
const articleSchema={
    title:String,
    content:String
};
const Article=mongoose.model("Article",articleSchema);
app.route("/articles")
    .get(function(req,res){
        Article.find({},function(err,foundArticles){
            if(!err) res.send(foundArticles);
            else res.send(err);
        });
    })
    .post(function(req,res){
        const newArticle=new Article({
            title:req.body.title,
            content:req.body.content
        });
        newArticle.save(function(err){
            if(err) res.send(err);
            else res.send("Successfully added");
        });
    })
    .delete(function(req,res){
        Article.deleteMany({},function(err){
            if(err) res.send(err);
            else res.send("Deleted successfully");
        });
    });
app.route("/articles/:articleTitle")
    .get(function(req,res){
        Article.findOne({title:req.params.articleTitle},function(err,foundArticle){
            if(foundArticle) res.send(foundArticle);
            else res.send("No matching article found");
        });
    })
    .put(function(req,res){
        Article.update({title:req.params.articleTitle},{title:req.body.title,content:req.body.content},{overwrite:true},function(err){
            if(err) res.send(err);
            else res.send("Updated");
        });
    })
    .patch(function(req,res){
        Article.update({title:req.params.articleTitle},{$set:req.body},function(err){
            if(err) res.send(err);
            else res.send("Updated");
        })
    })
    .delete(function(req,res){
        Article.deleteOne({title:req.params.articleTitle},function(err){
            if(err) res.send("No file found");
            else res.send("Deleted");
        });
    }); 
app.listen(3000,function(err){
    if(!err) console.log("Server is running on port 3000");
})
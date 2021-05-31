const express=require('express');
const app=express();
app.get("/",function(req,res){
    res.send("HELLO");
});
app.get("/contact",function(req,res){
    res.send("Contact me at x-y-z");
});
app.get("/about",function(req,res){
    res.send("Soham Ghosal");
});
app.get("/hobbies",function(req,res){
    res.send("YOYO");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
});
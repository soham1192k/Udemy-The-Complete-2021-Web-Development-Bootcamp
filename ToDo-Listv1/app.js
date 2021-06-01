const express=require('express');
const app=express();
var items=[];
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    var options={
        weekday:'long',
        day:"numeric",
        month:"long"
    };
    var day=new Date().toLocaleDateString("en-US",options);
    res.render('list',{kindOfDay:day,newListItems:items});
}); 
app.post("/",function(req,res){
    items.push(req.body.newItem);
    res.redirect("/");
});
app.listen(3000,function(){
    console.log("Server running!");
});
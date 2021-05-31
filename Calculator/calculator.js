const express=require('express');
const app=express();
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){
    var h=req.body.height;
    var w=req.body.weight;
    var bmi=Math.round(w/(h*h));
    res.send("Your BMI is "+bmi);
});
app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("The result is: "+result);
});
app.listen(3000);
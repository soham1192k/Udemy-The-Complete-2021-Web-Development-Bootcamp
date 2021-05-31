const express=require('express');
const https=require('https');
const app=express();
app.use(express.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    const query=req.body.cityName;
    const apikey="99a0e4a9bc4fd5aec05258bbd24b0fab";
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+unit+"&appid="+apikey;
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function (data){ 
            const weatherData=JSON.parse(data);
            const temp=weatherData.main.temp;
            const description=weatherData.weather[0].description;
            const icon=weatherData.weather[0].icon;
            const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<p>The weather is currently "+description+"</p>");
            res.write("<h1>The temperature in "+query+"is: "+temp+" degrees celsius</h1>");
            res.write("<img src="+imageURL+">");
            res.send();
        });
    });
})

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});
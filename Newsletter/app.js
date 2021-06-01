const express=require('express');
const app=express();
const https=require('https');
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});
app.post("/",function(req,res){
    const firstName=req.body.fname;
    const lastName=req.body.lname;
    const email=req.body.emailid;
    const data={
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME:firstName,
                    LNAME:lastName
                }
            }
        ]
    };
    const jsonData=JSON.stringify(data);
    const url= "https://us6.api.mailchimp.com/3.0/lists/eaf3a07bd2";
    const options={
        method:"POST",
        auth:"soham1192k:d6bcf70d42d29a29fb7adedafdd6754e-us6"
    };
    const request=https.request(url,options,function(response){
        if(response.statusCode===200){
            res.sendFile(__dirname+"/success.html");
        }
        else{
            res.sendFile(__dirname+"/failure.html");
        }
        response.on("data",function(data){
            console.log(JSON.parse(data));
        });
    });
    request.write(jsonData);
    request.end();
});
app.post("/failure",function(req,res){
    res.redirect("/");
});
app.listen(process.env.PORT||3000,function(){

});

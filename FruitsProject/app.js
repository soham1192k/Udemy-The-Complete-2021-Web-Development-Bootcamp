const mongoose=require('mongoose');
//default port--->27017
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true,useUnifiedTopology: true});
//define a schema(blueprint of our collection)
const fruitSchema=new mongoose.Schema({
    name:{
        type:String,
        //has to be added
        // required:[true,"Need a name!"]
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
});
//create a model
const Fruit=mongoose.model("Fruit",fruitSchema);
//a new document for the "Fruits" collection
const fruit=new Fruit({
    name:"Apple",
    rating:7,
    review:"Pretty solid"
});
//a new document
const kiwi=new Fruit({
    name:"Kiwi",
    rating:2
});
//a new document
const banana=new Fruit({
    name:"Banana",
    rating:10
});
// save all these documents to the collection
Fruit.insertMany([kiwi,fruit,banana],function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("SUCCESSFULLY SAVED ALL THE FRUITS TO THE DATABASE.");
    }
});
//Reading from the database
Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }
    else{
        //close the connection
        mongoose.connection.close();
        fruits.forEach(function(element){
            console.log(element.name);
        });
    }
});
//update some entry
Fruit.updateOne({_id:"60b7808eb156245c0f894d60"},{name:"Peach"},function(err){
    if(err) console.log(err);
    else console.log("Success");
});
//delete something
Fruit.deleteOne({name:"Peach"},function(err){
    if(err) console.log(err);
    else console.log("Success");
});
//embedding a document inside another doc
const personSchema=new mongoose.Schema({
    name:String,
    age:Number,
    favouriteFruit:fruitSchema
});
const Person=mongoose.model("Person",personSchema);
const pineapple=new Fruit({
    name:"Pineapple",
    rating:9,
    review:"Weird"
});
pineapple.save();
const person=new Person({
    name:"Amy",
    age:12,
    favouriteFruit:pineapple
});
person.save();
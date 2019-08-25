var express = require("express");
var bodyParser=require("body-parser");
var app=express();

app.use(bodyParser.urlencoded({extended:true}));

var foods=[
    {name:"Turkish Donner",pic:"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {name:"Hamburger",pic:"https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {name:"Pizza",pic:"https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {name:"Coconaut Dessert",pic:"https://images.pexels.com/photos/1030973/pexels-photo-1030973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
];

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});



//---------rest-------------
app.get("/foods",function(req,res){
    res.render("foods",{foods});
});

app.post("/foods",function(req,res){//form bizi buraya gönderir
    var adi=req.body.name;//body parser sayesinde verileri alıyoruz.
    var resim=req.body.pic;
    var newFood={name:adi,pic:resim};//arrayimizle aynı yapıda.
    foods.push(newFood);//yeni veriler eklenir.
    res.redirect("/foods");
});

app.get("/foods/new",function(req,res){//buradan newhtml gideriz
    res.render("new");//icinde post metodu olan form bizi foods postuna yollar yani bir üste
});

//-----------------------------



var server=app.listen(3000,function(){
    console.log("server port : %d",server.address().port);
});
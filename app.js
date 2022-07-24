let bcrypt = require("bcryptjs");
let express=require("express");
let app=express();
let mongoose=require("mongoose");
//let bcrypt = require('bcrypt');
let hbs=require("hbs");

let port=process.env.PORT || 8000;
require("./db/conn")
let T1=require("./models/register");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set("view engine","hbs")
app.get("/",(req,res)=>{
  //res.send("connection successfull !")
  res.render("index")
})
app.post("/",async(req,res)=>{
  try{
    let pass=req.body.pass;
    let cpass=req.body.cpass;
    if(pass===cpass){
      let d1=new T1({
        name:req.body.name,
        mail:req.body.mail,
        pass:pass,
        cpass:cpass
      })
      let sd=await d1.save();
      res.render("msg");
    }else{
      res.send("passwords are not matching*");
    }
  }catch(err){
    res.send("failed to submit the form*");
    console.log(err);
  }

})
app.get("/",(req,res)=>{
  res.send("connection successfull !")
})

app.listen(port,()=>{
  console.log(`listening to port ${port}`);
})

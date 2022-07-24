let mongoose=require("mongoose");
let bcrypt = require("bcryptjs");
let s1=new mongoose.Schema({
  name:{type:String,
  lowercase:true,
maxLength:10},
mail:{
  type:String,
  unique:true,
},
pass:{
  type:String,
  maxLength:12,
},
cpass:{
  type:String,
  maxLength:12,
}
})
s1.pre("save",async function(next){
  if(this.isModified("pass")){
    this.pass=await bcrypt.hash(this.pass,10);
    this.cpass=undefined;
  }
  next();
})
let T1=new mongoose.model("T1",s1);
module.exports=T1;

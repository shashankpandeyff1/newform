let mongoose=require("mongoose");
//connection
mongoose.connect("mongodb+srv://shashank:spr2004@cluster0.fz3wnjd.mongodb.net/?retryWrites=true&w=majority",{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
  console.log("database connected !!");
}).catch((err)=>{
  console.log("connection failed*");
  console.log(err);
})

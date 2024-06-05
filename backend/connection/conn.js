const mongoose=require("mongoose");
require('dotenv').config(); 
mongoose.connect("mongodb+srv://nisarganayak02:2KIMQzv1xqs4TBqx@cluster0.mvhupo5.mongodb.net/"
).then(()=>console.log("Connected"));
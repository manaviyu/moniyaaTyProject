const mongoose = require("mongoose");

//creating database
mongoose.connect("mongodb://localhost:27017/students-api",{
	useCreateIndex:true,
	useNewUrlParser:true,
	useUnifiedTopology:true,
	
}).then(()=>{
	console.log("connection successfull");
}).catch((error)=>{
	console.log(error);
})


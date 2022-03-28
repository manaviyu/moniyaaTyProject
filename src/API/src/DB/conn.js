const mongoose = require("mongoose");

//creating database
mongoose.connect("mongodb+srv://monika:Thirdyear@cluster0.jecrt.mongodb.net/olympics?retryWrites=true&w=majority",{
	useCreateIndex:true,
	useNewUrlParser:true,
	useUnifiedTopology:true
	
}).then(()=>{
	console.log("connection successfull");
}).catch((error)=>{
	console.log(error);
})


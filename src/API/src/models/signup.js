const mongoose = require("mongoose");
//database connection
/*mongoose.connect("mongodb://localhost:27017/electricalSignUp",{
	useCreateIndex:true,
	useNewUrlParser:true,
	useUnifiedTopology:true,
	
}).then(()=>{
	console.log("connection successfull");
}).catch((error)=>{
	console.log(error);
})
*/
//schema
const signupSchema = new mongoose.Schema({

	email:{
		type:String,
		required:true,
		unique:true
	},
	password:
	{
		type:String,
		required:true,
		unique:true
	},
	confirmpassword:{
		type:String,
		required:true,
		unique:true
	}
})

// define model
const Signup = new mongoose.model("Signup",signupSchema);
//without async await save data in table
/*const signupData = new Signup({
	email:"monuchandel01@gmail.com",
	password:12345,
	confirmpassword:12345
})

signupData.save();*/
//with async await save one data in table
/*
const createDocument = async () =>{
	try{
		const signupData = new Signup({
			email:"nisha001@gmail.com",
			password:"111111"!,
			confirmpassword:"111111"!
		})
		const result = await signupData.save();
		console.log(result);

	}
	catch(err){
		console.log(err);
	}
}

createDocument();*/
//with async await save multiple data in table
/*const createDocument = async () =>{
	try{
		const niravsignupData = new Signup({
			email:"nirav001@gmail.com",
			password:"116111",
			confirmpassword:"116111"
		})

		const mahisignupData = new Signup({
			email:"mahipatel@gmail.com",
			password:"009988",
			confirmpassword:"009988"
		})


		const result = await Signup.insertMany([niravsignupData,mahisignupData]);
		console.log(result);

	}
	catch(err){
		console.log(err);
	}
}
createDocument();
*/


//read data from collection
/*const getDocument = async() =>{
	const result = await Signup.find();
	//const result = await Signup.find({email:"nirav001@gmail.com"});
	//const result = await Signup.find({email:"nirav001@gmail.com"}).select({email:1});
	console.log(result);
}
getDocument();*/

module.exports = Signup;
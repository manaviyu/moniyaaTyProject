/*const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 4000;
const Signup = require("./src/models/signup");
app.use(bodyParser.json());
app.use(express.static('public'));//for static website
app.use(bodyParser.urlencoded({
	extended:true
}))

//creating database
mongoose.connect("mongodb://localhost:27017/electricalSignUp",{
	useCreateIndex:true,
	useNewUrlParser:true,
	useUnifiedTopology:true,
});

const db = mongoose.connection;
db.on('error',()=>
	console.log("error in connecting database"));

db.once('open',()=>
	console.log("connecting to database"));
//const path = require("path");
//require("./src/db/conn");
app.post("/signup",(req,res) =>{
	
		const email = req.body.email;
		const password = req.body.password;
		const confirmpassword = req.body.confirmpassword;

		const signupdata ={
				"email" : email,
				"password" :password,
				"confirmpassword" : confirmpassword
			}

		db.collection('user').insertOne(signupdata,(err,collection)=>{
			
			if (err) {
				throw err;
			}
			console.log("record insered successfully...");
		});
				
	res.redirect('index.html')
});

/*app.post("/login",(req,res) =>{
	
		const email = req.body.email;
		const password = req.body.password;
		
		console.log("Email : "+email+"   password : "+password);

		const useremail =  users.findOne({email:email});
		res.send(useremail);
		console.log(useremail)
	
});
	app.get("/",(req,res) =>{
	res.set({
		"Allow-access-Allow-Origin":'*'
	})
	return res.redirect('signupForm.html');
}).listen(port)	;

	console.log(`Server is running at port no ${port}`);
*/

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));//for static website

app.get("/",(req,res)=>{
	res.sendFile(__dirname+"/testForm.html")
})

//creating database
mongoose.connect("mongodb://localhost:27017/RKelectricals",{
	useCreateIndex:true,
	useNewUrlParser:true,
	useUnifiedTopology:true,
});

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

app.post("/signup",(req,res) =>{

		const signupdata = new Signup({
				"email" : req.body.email,
				"password" :req.body.password,
				"confirmpassword" : req.body.confirmpassword
			});
		res.redirect('./index.html')

	signupdata.save();
	
});

app.post("/login",async (req,res) =>{
	
		const email = req.body.email;
		const password = req.body.password;
		
		console.log("Email : "+email+"   password : "+password);

		const useremail =  await signups.findOne({email:email});
		res.send(useremail);
		console.log(useremail)
	
});

app.listen(4000,function () {
	console.log("server is listening on port number:4000")
})

const express = require("express");
require("./db/conn");
const app = express();
const port = process.env.PORT || 8000;
const MensRanking = require("./models/mens");

app.get("/",async (req,res)=>{
	res.send("hello from monika....")
})



app.use(express.json());
// we will handle post request

app.post("/mens",async (req,res) =>{
	try{
		const addingMensRecords = new MensRanking(req.body)
		console.log(req.body);
		const insertMens = await addingMensRecords.save();
		res.status(201).send(insertMens);
	}catch(e){
		res.status(400).send(e);
	}
	
})

app.get("/mens",async (req,res) =>{
	try{
		const getMens = await MensRanking.find({});
		res.status(201).send(getMens);
	}catch(e){
		res.status(400).send(e);
	}
	
})



app.listen(port , ()=>{
	console.log("connection setup at "+port);
})


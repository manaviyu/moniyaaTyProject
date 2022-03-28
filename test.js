const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));//for static website

app.get("/",(req,res)=>{
	res.sendFile(__dirname+"/testForm.html")
})

mongoose.connect("mongodb://localhost:27017/Test",{useNewUrlParser:true} ,{useUnifiedTopology:true} , {useCreateIndex:true});

const notesSchema = {
	title:String,
	content:String
}

const note = mongoose.model("note",notesSchema);

app.post("/",(req,res)=>{
	let newNote = new note({
		title : req.body.title,
		content : req.body.content
	});
	res.redirect('./index.html')

	newNote.save();
	
})
app.listen(3000,function () {
	console.log("server is listening on port number:3000")
})
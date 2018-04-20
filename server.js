var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/AuthorsApp/dist'));
console.log(__dirname + '/AuthorsApp/dist');

mongoose.connect("mongodb://localhost/authors");

var AuthorSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 3 }},
	{ timestamps: true, versionKey: false});

mongoose.model('Author', AuthorSchema);
var Author = mongoose.model('Author');

mongoose.Promise = global.Promise;





// ********************* ROUTES *********************

// ADD AUTHOR
app.post("/add", function(req, res){
	var author = new Author(req.body);
  	author.save(function(err, author){
		if(err){
			console.log("ERROR: ", err);
		}
		else{
			console.log('You successfully created an author.', author);
			res.json({message: "Success", author: author});
		}
	})
})

// RETRIEVE ALL AUTHORS
app.get('/authors', function(req, res){
	Author.find({}, function(err, authors){
		if(err){
			console.log("ERROR: ", err);
			res.json({message: "ERROR", error: err});
		}
		else{
			res.json({message: "Success", authors: authors})
		}
	})
})

// RETRIEVE A TASK BY ID
app.get("/retrieve/:id", function(req, res){
	Author.find({_id: req.params.id}, function(err, author){
		if(err){
			console.log("ERROR: ", err);
			res.json({message: "ERROR", error: err});
		}
		else{
			res.json({message: "Success", author });
		}
	})
})

// EDIT AUTHOR BY ID
app.put("/edit/:id", function(req, res){
	edited_author = {};
	if (req.body){
		edited_author = req.body;
	}
	Author.update({_id: req.params.id}, edited_author, function(err){
		if(err){
			console.log("ERROR: ", err);
			res.json({message: "ERROR", error: err});
		}
		else{
			res.json({message: "Success"})
		}
	});
})

// DELETE AUTHOR BY ID
app.delete("/delete/:id", function(req, res){
	Author.remove({_id: req.params.id}, function(err){
		if(err){
			console.log("ERROR: ", err);
			res.json({message: "ERROR", error: err});
		}
		else{
			res.json({message: "Success"})
		}
	});
})

// catch-all route
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./AuthorsApp/dist/index.html"))
});

var server = app.listen(8000, function(){
	console.log("listening on port 8000");
});
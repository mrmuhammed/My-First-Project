var path = require("path"),
	express = require("express");

var app = express()
			.use(express.static(__dirname,
								path.join(__dirname, "bower_components"),
								path.join(__dirname, "js")))
			.use(express.bodyParser());

var db = [
	{id: 1, name: "john"}
];

var id = db.length()

var getId = function() {
	return id++;
};

app.get("/hello", function(req, res) {
	res.send("Hello, World");
});

app.get("/users", function(req, res) {
	res.json(db)
});


app.post("/users", function(req, res) {
	db.push(req.body);
	res.end();
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Started on port " + port);
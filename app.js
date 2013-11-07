var path = require("path"),
	express = require("express");

var app = express()
			.use(express.static(__dirname,
								path.join(__dirname, "bower_components"),
								path.join(__dirname, "js")));

app.get("/hello", function(req, res) {
	res.send("Hello, World");
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Started on port " + port);
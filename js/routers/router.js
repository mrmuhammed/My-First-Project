APP.Router = Backbone.Router.extend({
	routes: {
		"first": "firstRoute",
		"second": "secondRoute"
	},

	firstRoute: function() {
		console.log("firstRoute() was hit. ");
		APP.usersCollection = new APP.Users()
		APP.usersCollection.create({name:"colin", phone:206-816-0495});
		APP.usersCollection.create({name:"dan", address:"seattle"});
	},

	secondRoute: function() {
		console.log("secondRoute() was hit. ");
		APP.usersCollection = new APP.Users();
		APP.usersCollection.fetch();
		console.dir(APP.usersCollection);
	}
});

APP.router = new APP.Router();
Backbone.history.start({root: "/"});
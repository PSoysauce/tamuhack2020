var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;
(mongoose = require("mongoose")),
  (Customer = require("./api/models/Customer")),
  (Item = require("./api/models/Item")),
  (bodyParser = require("body-parser"));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/AAdb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/rewardsRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("American Rewards API server started on: " + port);

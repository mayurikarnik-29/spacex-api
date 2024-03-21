var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Launchpad = require("./models/launchpad.model"),
  bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors());


mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb+srv://spacexuser:spacexuser@launchpad.mzzsve2.mongodb.net/spacex?retryWrites=true&w=majority",
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes/launchpad.route");
routes(app);

app.listen(port);

console.log("SpaceX RESTful API server started on: " + port);

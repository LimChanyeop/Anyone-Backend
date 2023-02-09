var express = require("express");

var app = express();

// Default Setting
const port = process.env.PORT || 3000;

app.use("/index", function (req, res, next) {
	res.status(200).send(infoMsg.success);
});

app.use("/users", require("./routes/user"));

module.exports = app;
var express = require("express");
var infoMsg = require("./message/msg_info");

var app = express();

// Default Setting
const port = process.env.PORT || 3000;

app.use("/", function (req, res, next) {
	res.status(200).send(infoMsg.success);
});

app.use("/index", function (req, res, next) {
	res.status(200).send(infoMsg.success);
});

app.use("/users", require("./routes/user"));

module.exports = app;
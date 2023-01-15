var express = require("express");

const logger = require("./config/logger");
var app = express();

// Default Setting
const port = process.env.PORT || 3000;

app.use("/index", function (req, res, next) {
	res.status(200).send(infoMsg.success);
});

module.exports = app;
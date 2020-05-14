const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
	res.send("Success");
});

app.get("/test", (req, res) => {
	res.send("Test");
});

app.listen(3000);

// module.exports = app;

const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
	res.sendFile(__dirname + "public/kontakt.html");
});

app.post("/", (req, res) => {
	console.log(req.body);

	const transporter = nodemailer.createTransport({
		host: "smtp.hispeed.ch",
		port: 587,
		secure: false,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});

	let mailOptions = {
		from: req.body.email,
		to: process.env.EMAIL,
		subject: `Message from ${req.body.email}: ${req.body.subject}`,
		text: req.body.message,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			res.send("error");
		} else {
			console.log("Email sent: " + info.response);
			res.send("Success");
		}
	});

	transporter.verify(function (error, success) {
		if (error) {
			console.log(error);
		} else {
			console.log("Server is ready to take our messages");
		}
	});
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

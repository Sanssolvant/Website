const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 10000;

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENTID, process.env.CLIENTKEY, process.env.REDIRECTURI);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESHTOKEN });

// Middleware
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
	res.sendFile(__dirname + "public/index.html");
});

app.post("/", async (req, res) => {
	console.log(req.body);
	try {
		const accessToken = oAuth2Client.getAccessToken();

		const transporter = nodemailer.createTransport({
			service: "gmail",
			port: 465,
			secure: true,
			auth: {
				type: "OAuth2",
				user: process.env.EMAIL,
				clientId: process.env.CLIENTID,
				clientSecret: process.env.CLIENTKEY,
				refreshToken: process.env.REFRESHTOKEN,
				accessToken: accessToken,
			},
		});

		let mailOptions = {
			from: req.body.email,
			to: process.env.EMAIL,
			subject: `Message from ${req.body.email}: ${req.body.subject}`,
			text: req.body.message,
		};

		await transporter.sendMail(mailOptions, (error, info) => {
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
			transporter.close();
		});
	} catch (error) {
		return error;
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

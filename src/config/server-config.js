const dotenv = require("dotenv");

dotenv.config();

module.exports = {
	PORT: parseInt(process.env.PORT),
	GMAIL_PASS: process.env.GMAIL_PASS,
	GMAIL_EMAIL: process.env.GMAIL_EMAIL,
};

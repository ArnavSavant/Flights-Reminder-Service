const express = require('express');

const {serverConfig, Logger, mailSender} = require('./config');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/api',routes);

app.listen(serverConfig.PORT, async() => {
	console.log(`Succesfully listening on PORT: ${serverConfig.PORT}`);
	try {
		const response = await mailSender.sendMail({
			from: serverConfig.GMAIL_EMAIL,
			to: "savantishu02@gmail.com",
			subject: "Is the service working ?",
			text: "Yes, it is working",
		});
		console.log(response);
	} catch (error) {
		console.log(error);
	}
});
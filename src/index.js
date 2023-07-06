const express = require("express");
const amqplib = require("amqplib");
const { EmailService } = require("./services");
const { serverConfig } = require("./config");
const routes = require("./routes");
async function connectQueue() {
	try {
		const connection = await amqplib.connect("amqp://localhost");
		const channel = await connection.createChannel();
		await channel.assertQueue(serverConfig.QUEUE);
		channel.consume(serverConfig.QUEUE, async (data) => {
			const object = JSON.parse(`${Buffer.from(data.content)}`);
			EmailService.sendMail(
				serverConfig.GMAIL_EMAIL,
				object.recepientEmail,
				object.subject,
				object.text
			);
			channel.ack(data);
		});
	} catch (error) {
		console.log(error);
	}
}
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api", routes);

app.listen(serverConfig.PORT, async () => {
	console.log(`Succesfully listening on PORT: ${serverConfig.PORT}`);
	await connectQueue();
	console.log("Queue is up");
});

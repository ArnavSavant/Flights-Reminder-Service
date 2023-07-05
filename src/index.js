const express = require('express');

const {serverConfig, Logger, mailSender} = require('./config');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/api',routes);

app.listen(serverConfig.PORT, async() => {
	console.log(`Succesfully listening on PORT: ${serverConfig.PORT}`);
	
});
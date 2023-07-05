const { TicketRepository } = require("../repository");
const { MAILER } = require("../config");

const ticketRepository = new TicketRepository();
async function sendMail(mailFrom, mailTo, subject, text) {
	try {
		const response = await MAILER.sendMail({
			from: mailFrom,
			to: mailTo,
			subject: subject,
			text: text,
		});
		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

async function createTicket(data) {
	try {
		const response = await ticketRepository.create(data);
		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

async function getPendingEmails() {
	try {
		const response = await ticketRepository.getPendingEmail();
		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
module.exports = {
	sendMail,
	createTicket,
	getPendingEmails,
};

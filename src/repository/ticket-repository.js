const CrudRepository = require("./crud-repository");
const { Ticket } = require("../models");
const ENUMS = require('../utils/common/enum');
const {PENDING} = ENUMS.EMAIL_STATUS;
class TicketRepository extends CrudRepository {
	constructor() {
		super(Ticket);
	}

	async getPendingTickets() {
		const response = await Ticket.findAll({
			where: {
				status: PENDING,
			},
		});
	}
}

module.exports = TicketRepository;

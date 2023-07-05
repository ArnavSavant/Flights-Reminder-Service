const express = require('express');

const router = express.Router();

const {infoController} = require('../../controllers');
const ticketRoutes = require("./ticket-routes");

router.get('/info', infoController.info);
router.use('/tickets',ticketRoutes);

module.exports = router;
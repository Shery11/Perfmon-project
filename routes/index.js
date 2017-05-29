const express = require('express');
const router = express.Router();

// other modules

const customerModule = require("./customerModule");
const eventsModule = require("./eventsModule");

const displayCustomers 	= customerModule.displayCustomers;
const addCustomer 		= customerModule.addCustomer;
const saveCustomer 		= customerModule.saveCustomer;
const editCustomer 		= customerModule.editCustomer;
const saveAfterEdit 	= customerModule.saveAfterEdit;
const deleteCustomer 	= customerModule.deleteCustomer;

// customer events
const displayEvents		= eventsModule.displayEvents;
const addEvent			= eventsModule.addEvent;
const saveEvent			= eventsModule.saveEvent;
const deleteEvent		= eventsModule.deleteEvent;


// router specs
router.get('/', (req, res, next) => {
  res.redirect('/customers');
});


router.get('/customers', 				displayCustomers);

router.get('/customers/add', 			addCustomer);
router.post('/customers/add', 		saveCustomer);

router.get('/customers/edit/:id', 	editCustomer);
router.post('/customers/edit/:id', 	saveAfterEdit);

router.get('/customers/delete/:id', deleteCustomer);

//customer events
router.get('/customers/events', 	displayEvents);

router.get('customers/id:/events/add', addEvent);
router.post('customers/id:/events/add', saveEvent);			//error here about anonymous functions....

router.get('customers/events/delete/:id', deleteEvent);


module.exports = router;

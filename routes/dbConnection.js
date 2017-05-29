const mongoose = require('mongoose');

const dbUrl = 'mongodb://127.0.0.1:27017/perfmons';
let connection = null;
let model = null;

const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;


const customerSchema = new Schema({
	customerNumber: String,
	customerName: String,
	customerDevelopers: [
		{firstName: String, lastName: String}
	]
});

// custom schema method
customerSchema.methods.getDeveloperNames = 
		function() {
			return this.customerDevelopers.map(
							 (elem) => {
								return elem.firstName + ' ' + 
											 elem.lastName;
							}).join(',');
		};

module.exports.getModel = 
	() => {
		if (connection == null) {
			console.log("Creating connection and model...");
			connection = mongoose.createConnection(dbUrl);
			model = connection.model("CustomerModel", customerSchema);
		};
		return model;
	};


























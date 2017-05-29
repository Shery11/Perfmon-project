const DB = require('./dbConnection.js');
const Customer = DB.getModel();

//add a customer, 

module.exports.addCustomer = 
	(req , res , next) => {

	  	res.render('addCustomerView', 
	  		{title:"Add a Customer"});
	};

//delete a customer

module.exports.deleteCustomer =  
	(req , res , next) => {
	     
	   //  let id = req.params.id;

	   // // console.log(id);
	    
	   //  Customer.findById(id,  (err, customer) => {
	   //    if(err)
	   //      console.log("Error Selecting : %s ", err); 
	   //    if (!customer)
	   //      return res.render('404');
	      
	   //    customer.remove( (err) => {
	   //      if (err)
	   //        console.log("Error deleting : %s ",err );
	   //      res.redirect('/customers');
	   //    });        
	   //  }); 
  	};

//display the customers

module.exports.displayCustomers = 
	(req , res , next) => {

	    Customer.find({}, (err , customers) => {
	     
	      if(err)
	          console.log("Error : %s ",err);

	      let results = customers.map( (customer) => {
	      	return {
	      		id: customer._id,
	          	customerName: customer.customerName,
	          	customerNumber: customer.customerNumber
	      	}
	      });
           res.json(results);
           
	      // res.render('displayCustomersView',
	      // 	{title:"List of Customers", data:results});
	    });
	};


//edit an existing customer

module.exports.editCustomer = 
	(req , res , next) => {
	       
	    let id = req.params.id;

	    Customer.findById(id, (err, customer) => {
	      if(err)
	        console.log("Error Selecting : %s ", err); 
	      if (!customer)
	        return res.render('404');

	      res.render('editCustomerView',
	          {title:"Edit Customer", 
	           data: {id: customer._id,
	                  customerNumber: customer.customerNumber,
	                  customerName: customer.customerName
	              }
	          });                
	    });
	};

// save new customer

module.exports.saveCustomer = 
	(req , res , next) => {
 	       

	    let customer = new Customer({
	      customerNumber:     req.body.cnumber,
	      customerName:       req.body.cname
	    }); 
	 
	    customer.save((err) => {
	      if(err)
	        console.log("Error : %s ",err);
	      res.redirect('/customers');
	    });

	  };


//  save after edit
module.exports.saveAfterEdit = 
	(req , res , next) => {
	       
	    let id = req.params.id;

	    Customer.findById(id, (err, customer) => {
	      if(err)
	        console.log("Error Selecting : %s ", err); 
	      if (!customer)
	        return res.render('404');
	      
	        customer.customerNumber = req.body.cnumber
	        customer.customerName = req.body.cname;
	        
	        
	        customer.save((err) => {
	          if (err)
	            console.log("Error updating : %s ",err );
	          res.redirect('/customers');
	        });
	    });
	  };

/////////////////////////////////////
//////////EVENTS/////////////////////
/////////////////////////////////////
 
// add event
module.exports.addEvent = 
	(req , res , next) => {

	  	res.render('addEventView', 
	  		{title:"Add a Perfmon Event"});
	};

//save an event
module.exports.saveEvent = 
	(req , res , next) => {
 	       

	    let perfEvent = new PerfEvent({
	      customerNumber:     req.body.cnumber,
	      customerName:       req.body.cname
	    }); 
	 
	    customer.save((err) => {
	      if(err)
	        console.log("Error : %s ",err);
	      res.redirect('/events');
	    });

	  };


//delete an event
module.exports.deleteEvent = 
	(req , res , next) => {
	     
	    let id = req.params.id;
	    
	    Customer.findById(id,  (err, customer) => {
	      if(err)
	        console.log("Error Selecting : %s ", err); 
	      if (!customer)
	        return res.render('404');
	      
	      customer.remove( (err) => {
	        if (err)
	          console.log("Error deleting : %s ",err );
	        res.redirect('/events/');
	      });        
	    });
  	};

//display the customers

module.exports.displayEvents = 
	(req , res , next) => {

	    Customer.find({}, (err , events) => {
	     
	      if(err)
	          console.log("Error : %s ",err);

	      let results = events.map( (customer) => {
	      	return {
	      		id: customer._id,
	          	customerEvent: customer.customerEvent	      	}
	      });
           
           res.json(results);

	      // res.render('displayEventsView',
	      // 	{title:"List of Events", data:results});
	    });
	};



  
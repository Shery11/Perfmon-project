const DB = require('./dbConnection.js');
const Events = DB.getModel();

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

	      res.render('displayEventsView',
	      	{title:"List of Events", data:results});
	    });
	};



  
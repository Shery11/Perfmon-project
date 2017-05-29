//	calendar.js
// for picking a date of the Perfmon Event


var t = Handlebars.compile($('#calendar').html());
var $html = $(t());

function changeDate(){
  $html.find('.datePicker').datepicker({  
    minDate: minimumDate("2010-08-10"),
    maxDate: minimumDate("2017-08-15"),
  });
}


$html.find('.datePicker').datepicker({  
  dateFormat: "d MM yy",
  minDate: minimumDate("2012-06-04"),
  maxDate: minimumDate("2017-07-20"),
});
$('body').append($html);


function minimumDate(minDate) {
    var date = new Date(minDate);
    if (date < Date.now()) {
        return new Date(Date.now());
    } else {
        return date;
    }
}

function maximumDate(maxDate) {
    var date = new Date(maxDate);
    if (date < Date.now()) {
    } else {
        return date;
    }
}
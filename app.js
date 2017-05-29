//CS602 final

const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const formidable = require('formidable');
const fs = require('fs');


const app = express();

// setup handlebars view engine
// app.engine('handlebars', 
//     handlebars({defaultLayout: 'main_logo'}));
// app.set('view engine', 'handlebars');

// register path to partials
// partials will be used for perfmon graphs
//handlebars.registerPartials(__dirname + '/views/partials');

// static resources
app.use(express.static(__dirname + '/public'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// Routing for pages
var routes = require('./routes/index');
app.use('/', routes);




// Error Pages and epic fail
app.get('/epic-fail', function(req, res){
    process.nextTick(function(){
        throw new Error('Kaboom! Something is wrong here');
    });
});

app.use((req, res) => {
    res.status(404);
    res.render('404');
});

app.use((req, res) => {
    res.status(500);
    res.render('500');
});





// error checking to make sure upload data directory exists
var dataDir = __dirname + '/upload';
var perfMonUpload = dataDir + '/perfMonUpload';
if(!fs.existsSync(dataDir)) fs.mkdirSync(dataDir); 
if(!fs.existsSync(perfMonUpload)) fs.mkdirSync(perfMonUpload);




//server port listen and stuff like that.

app.listen(3000, () => {
  console.log('http://localhost:3000');
});


//do i need to import filename here as variable?
//need to send variables to  relog [name].blg -f csv -o [name].csv 
//var include = fileUploadName.js ???


var spawn = require('child_process').spawn;
var child = spawn('relog.exe', [
  'perfmon.blg', '-f', 'csv', 'perfmon.csv'
]);

child.stdout.on('data', function(chunk) {
  // output will be here in chunks
});

// or if you want to send output elsewhere
child.stdout.pipe(dest);


//help taken from   http://stackoverflow.com/questions/20643470/execute-a-command-line-binary-with-node-js
var fs = require('fs');


var contents = fs.readFileSync('app.js', 'utf8');


// console.log("I read this file");


// console.log(contents);

fs.writeFileSync('app.txt', contents);


fs.readFile('app.js', 'utf8', function(err, data){
	fs.writeFile('app.txt', data, function(){});
});

console.log("after initialising async file read");

fs.mkdir('rattandeep', function(){
	fs.rmdir('rattandeep', function (argument) {	
});
});


var request = require('request');
var fs = require('fs');
request('http://www.google.com', function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  fs.writeFile('google.html', body, function(err){
  	console.log(err);
  });
  //console.log('body:', body); // Print the HTML for the Google homepage. 
});

var git = require('git-rev');
git.branch(function (str) {
  console.log('branch', str)
  // => master 
})
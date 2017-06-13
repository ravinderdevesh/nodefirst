var http = require('http');
var fs = require('fs');
var myServer = http.createServer(function(req,res){
	console.log(req.url);
	console.log(req.method);

	if (req.url == '/'){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end("Hello World");
	}
	else{
	if (req.url == '/index'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.readFile('index.html', 'utf8', function(err,data){
			res.end(data);
		});	
	}


else{
	res.writeHead(404, {'Content-Type': 'text/plain'});
	res.end("Not Found");}
	}	
});

myServer.listen(3000, '0.0.0.0');
console.log("Hello World");
time = 0;
var intervalNumber = setInterval(function(){

	console.log("Hi");

	time = time + 2;

	if(time > 5){
		clearInterval(intervalNumber);
	}

}, 2000);

console.log(__dirname);
console.log(__filename);



console.log("End of the file");
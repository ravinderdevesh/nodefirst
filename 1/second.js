function f(){
	console.log("f");
}


var x = function(){
	console.log("x");
};


f();
x();

var high = function(func){
	console.log("inside high");
	func();
};


high(x);
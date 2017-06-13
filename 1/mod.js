var myPrint = function(){
	console.log("nodejs is also fun");
};

var second = function(){
	console.log("second function");
}

module.exports = {second: second, myPrint: myPrint};
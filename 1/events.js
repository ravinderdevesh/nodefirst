var events = require('events');


var myEmitter = new events.EventEmitter();


myEmitter.on('blah', function(data){
	console.log(data);
});

myEmitter.emit('blah', "Hi From Events");
myEmitter.emit('blah', "Hi again");
myEmitter.emit('blah', "Hi ");
var util = require('util');
var Person = function(name, age){
	this.name = name;
	this.age = age;
};

util.inherits(Person, events.EventEmitter);


var shreyashish = new Person("Shreyashish", 22);
var rajiv = new Person("Rajiv", 22);
branch = new events.EventEmitter();

shreyashish.on('gaali', function(gaali){
	console.log("Shreyashish ye hai "+ gaali);
});

rajiv.on('branchcheck', function(){
	shreyashish.emit('gaali', 'stud');
});

branch.on('deploy', function(){
	rajiv.emit('branchcheck',{});

});


shreyashish.on('branch', function(){
	console.log("Deploying that branch");
	branch.emit('deploy', {});
})


setTimeout(function(){
	shreyashish.emit('branch',{});
}, 100c0);

console.log("end of the file");



















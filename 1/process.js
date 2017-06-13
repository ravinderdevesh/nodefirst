console.log(parseInt(process.argv[2]) + parseInt(process.argv[3]));



var EventEmitter = function(){
	this.events = {};
	this.on = function(key, func){
		this.events[key]=func;
	};

	this.emit = function(key, data){
		this.events[key](data);
		};
};

var a = new EventEmitter();
a.on('test', function(data){console.log(data);});

a.emit('test', 'message');


















window.addEventListener("load", init)

function init(){
	var controller = new Controller;
	controller.yo()
}

function Controller(){};

Controller.prototype = {
	yo: function(){
		console.log("something")
	}
}

function Model(){

};

function View(){

};
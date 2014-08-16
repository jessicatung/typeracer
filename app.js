window.addEventListener("load", init)

function init(){
	var controller = new Controller;
	controller.bindEventListeners()
}

function Controller(){};

Controller.prototype = {
	bindEventListeners: function(){
		
		document.addEventListener("keyup", this.yo)
	},
	yo: function(){
		console.log("yo")
	}
}

function Model(){

};

function View(){

};
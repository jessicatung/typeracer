window.addEventListener("load", init)

function init(){
	var model = new Model;
	var view = new View;
	var controller = new Controller( model, view );
	controller.bindEventListeners()
}

function Controller( model, view ){
	this.model = model;
	this.view = view;
};

Controller.prototype = {
	bindEventListeners: function(){
		document.addEventListener("keyup", this.view.meow)
	},
	yo: function(){
		console.log("yo")
	}
}

function Model(){

};

function View(){

};

View.prototype = {
	meow: function(){
		console.log("meow")
	}
}
function Controller( gameText, view ){
	this.gameText = gameText;
	this.view = view;
};

Controller.prototype = {
	bindEventListeners: function(){
		document.addEventListener("keyup", this.handleInput.bind(this))
	},
	handleInput: function(e){
		var code = e.keyCode
		this.gameText.checkInput(code)
	}
}

// this is our model
function GameText(){
	this.text = "Salar Sucks!";
}
GameText.prototype = {
	checkInput: function(keyCode){
		console.log(keyCode)
	},
	getCharCode: function(){

	}
}

function View(){};

View.prototype = {
	meow: function(){
		console.log(this)
	}
}

function init(){
	var controller = new Controller( new GameText, new View );
	controller.bindEventListeners()
}

window.addEventListener("load", init)






function Controller( gameText, view ){
	this.gameText = gameText;
	this.view = view;
};

Controller.prototype = {
	bindEventListeners: function(){
		document.addEventListener("keypress", this.handleInput.bind(this))
	},
	handleInput: function(e){
		var code = e.keyCode
		this.gameText.checkInput(code)
	}
}

// this is our model
function GameText(){
	this.text = "salar sucks";
}
GameText.prototype = {
	checkInput: function(keyCode){
		var letterToCheck = this.getCharCode(this.text[0]);

		if(keyCode === letterToCheck){
			console.log("meow")
			return true;
		} else{
			console.log("wrong")
			return false;
		}
	},
	getCharCode: function(letter){
		return letter.charCodeAt(0)
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






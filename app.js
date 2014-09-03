function Controller( gameText, tracker, view ){
	this.gameText = gameText;
	this.tracker = tracker;
	this.view = view;
};

Controller.prototype = {
	bindEventListeners: function(){
		document.addEventListener("keypress", this.handleInput.bind(this))
	},
	handleInput: function(e){
		var code = e.keyCode
		var isCorrect = this.gameText.isCorrect(code)
		if(isCorrect === true){
			this.tracker.incrementCorrect()
		}
	}
}

// this is our model
function GameText(){
	this.text = "salar sucks";
}
GameText.prototype = {
	isCorrect: function(keyCode){
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

// Tracker, keeps track of where in sentence the user is at
function Tracker(){
	this.correct = 0
}

Tracker.prototype = {
	incrementCorrect: function(){
		++this.correct
	}
}

//
function View(){};

View.prototype = {
	meow: function(){
		console.log(this)
	}
}

function init(){
	controller = new Controller( new GameText, new Tracker, new View );
	controller.bindEventListeners()
}

window.addEventListener("load", init)






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
		var keyCode = e.keyCode
		var currentLetterIndex = this.tracker.correct
		var isCorrect = this.gameText.isCorrect(keyCode, currentLetterIndex)
		if(isCorrect === true){
			this.tracker.incrementCorrect()
			this.view.markAsCorrect(currentLetterIndex)
		}
	}
}

// this is our model
function GameText(){
	this.text = "salarsucks";
}

GameText.prototype = {
	isCorrect: function(keyCode, currentLetterIndex){
		var letterToCheck = this.getCharCode(this.text[currentLetterIndex]);
		return keyCode === letterToCheck
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

// View stuff
function View(){}

View.prototype = {
	markAsCorrect: function(currentLetterIndex){
		var gameText = this.getGameTextElement()
		var letterElement = this.getLetter(currentLetterIndex, gameText)
		// Adds class="correct" to appropriate span element
		letterElement.className = "correct"
	},

	getGameTextElement: function(){
		return document.getElementsByClassName("game-text")[0]
	},

	getLetter: function(currentLetterIndex, gameText){
		return gameText.children[currentLetterIndex]
	}
}

function init(){
	var controller = new Controller( new GameText, new Tracker, new View );
	controller.bindEventListeners()
}

window.addEventListener("load", init)






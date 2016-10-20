window.onload = function () {

	var wins;
	var userGuesses = [ ];
	var guessesLeft;

	function pickWord() {
		var randomWord = ['school', 'math', 'chalk', 'science', 'lunch', 'history', 'bus'];
		var compPick = randomWord[Math.floor(Math.random() * randomWord.length)];

		return compPick;
	};

	function displayDashes(word) {
		var display = "";
		for (var i = 0; i < word.length; i++)
			{
				display = display + "-";
			}
			return display;
	};

	function isLetterInWord(word, letter) {
		if (word.search(letter)!= -1) {
			var index = word.search(letter);
			var newDisplay = display.substr(0, index) + letter + display.substr(index + 1);
		}
		else {
			newDisplay = display;
			console.log("Display: " + display);
			guessesLeft--;
			console.log(guessesLeft);
		}
		return newDisplay;
	}

	wins = 0;
	document.getElementById("wins").innerHTML = wins;
	userGuesses = [];
	document.getElementById("userGuesses").innerHTML = userGuesses;
	guessesLeft = 13;
	document.getElementById("guessesLeft").innerHTML = guessesLeft;	
	var word = pickWord();
	var display = displayDashes(word);
	document.getElementById("dashes").innerHTML = display;
	
	console.log(word)

	document.onkeydown = function (event) {
		var userInput = String.fromCharCode(event.keyCode).toLowerCase();
		userGuesses.push(userInput);
		display = isLetterInWord(word, userInput);
		document.getElementById("userGuesses").innerHTML = userGuesses + " ";
		
	};
}
window.onload = function () {

	var wins;
	var userGuesses = [];
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
			return true;
		}
		return false;
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
		if (isLetterInWord(word, userInput) == true) {


		}

	};
}
window.onload = function () {

	var wins;
	var userGuesses = [];
	var guessesLeft;

	function pickWord() {
		var randomWord = ['school', 'math', 'chalk', 'science', 'lunch', 'history', 'bus'];
		var compPick = randomWord[Math.floor(Math.random() * randomWord.length)];

		return compPick;
	};

	// function displayDashes(word) {
	// 	var display = "";
	// 	for (var i = 0; i < word.length; i++)
	// 		{
	// 			display = display + "-";
	// 		}
	// 		return display;
	// 

	function displayDashes (word , guesses) {
		var display = "" ;
		for ( var i = 0 ; i < word. length ; i++) {
			if ( inArray (word[i] , guesses))
			display = display + word[i] ;
			else
			display = display + "-" ;
			}
		guessesLeft--;
		return display ;
	}

	function inArray (myElement , myArray) {
		for ( var i = 0 ; i < myArray. length ; i++) {
			if (myArray[i] == myElement)
			return true
			}
		return false ;
	}

	// function isLetterInWord(word, letter) {
	// 	if (word.search(letter)!= -1) {
	// 		var index = word.search(letter);
	// 		var newDisplay = display.substr(0, index) + letter + display.substr(index + 1);
	// 		guessesLeft--;
	// 	}
	// 	else {
	// 		newDisplay = display;
	// 		guessesLeft--;
	// 		console.log(guessesLeft);
	// 	}
	// 	return newDisplay;
	// }

	function resetGame() {
		userGuesses = [];
		guessesLeft = 13;
		var word = pickWord();
		var display = displayDashes(word, userGuesses);
		document.getElementById("dashes").innerHTML = display;
	}

	wins = 0;
	userGuesses = [];
	guessesLeft = 13;	
	var word = pickWord();
	var display = displayDashes(word, userGuesses);
	document.getElementById("dashes").innerHTML = display;
	
	console.log(word);

	document.onkeydown = function (event) {
		document.getElementById("wins").innerHTML = wins;
		var userInput = String.fromCharCode(event.keyCode).toLowerCase();
		userGuesses.push(userInput);
		// display = isLetterInWord(word, userInput);
		document.getElementById("dashes").innerHTML = displayDashes(word, userGuesses);
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
		document.getElementById("userGuesses").innerHTML = userGuesses + " ";
		if (display == word) {
			playAgain = alert("You Win! Would you like to play again?");
			if (playAgain == true) {
				resetGame();
			}
		} else if (guessesLeft == 0) {
			playAgain = alert("You Lose. Would you like to play again?");
			if (playAgain == true) {
				resetGame();
			}
		}
	}
}
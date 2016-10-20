window.onload = function () {

	var wins;
	var userGuesses = [];
	var guessesLeft;

	function pickWord() {
		var randomWord = ['school', 'math', 'chalk', 'science', 'lunch', 'history', 'bus', 'alphabet', 'book', 'library', 'calculator', 'ruler', 'board', 'desk', 'backpack', 'pencil', 'pen'];
		var compPick = randomWord[Math.floor(Math.random() * randomWord.length)];

		return compPick;
	};

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

	wins = 0;
	userGuesses = [];
	guessesLeft = 13;	
	var word = pickWord();
	var display = displayDashes(word, userGuesses);
	document.getElementById("dashes").innerHTML = display;
	
	console.log(word);

	function resetGame() {
		userGuesses = [];
		guessesLeft = 13;
		word = pickWord();
		display = displayDashes(word, userGuesses);
		document.getElementById("dashes").innerHTML = display;
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
		document.getElementById("userGuesses").innerHTML = userGuesses + " ";
	}

	document.onkeydown = function (event) {
		document.getElementById("wins").innerHTML = wins;
		var userInput = String.fromCharCode(event.keyCode).toLowerCase();
		userGuesses.push(userInput);
		display = displayDashes(word, userGuesses);
		document.getElementById("dashes").innerHTML = display;
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
		document.getElementById("userGuesses").innerHTML = userGuesses + " ";
		if (display == word) {
			wins++;

			playAgain = confirm("You Win! Would you like to play again?");
			if (playAgain == true) {
				resetGame();
			}
		} else if (guessesLeft == 0) {
			playAgain = confirm("You Lose. Would you like to play again?");
			if (playAgain == true) {
				resetGame();
			}
		}
	}
}
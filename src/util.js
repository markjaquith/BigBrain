function makeRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function makeRandomCode() {
	const code = [];
	for (let position = 0; position < 4; position++) {
		code[position] = makeRandomNumber(0, 5);
	}
	return code;
}

export function calculateScores(code, guesses) {
	return guesses.map((guess) => calculateScore(code, guess));
}

function calculateScore(code, guess) {
	const tempCode = [...code];
	const score = [];

	// Scoring black pins.
	for (let position = 0; position < 4; position++) {
		if (guess[position] === tempCode[position]) {
			score.push(2);
			tempCode[position] = null;
		}
	}

	// Scoring white pins.
	for (let position = 0; position < 4; position++) {
		if (tempCode.includes(guess[position])) {
			score.push(1);
			tempCode[tempCode.indexOf(guess[position])] = null;
		}
	}

	return score;
}

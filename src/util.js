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
	const workingCode = [...code];
	const workingGuess = [...guess];
	const score = [];

	// Scoring black pins.
	for (let position = 0; position < 4; position++) {
		if (workingGuess[position] === workingCode[position]) {
			score.push(2);
			workingCode[position] = null;
			workingGuess[position] = null;
		}
	}

	// Scoring white pins.
	for (let position = 0; position < 4; position++) {
		if (workingGuess[position] !== null && workingCode.includes(workingGuess[position])) {
			score.push(1);
			workingCode[workingCode.indexOf(workingGuess[position])] = null;
			workingGuess[position] = null;
		}
	}

	return score;
}

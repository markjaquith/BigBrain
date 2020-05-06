# BigBrain

BigBrain is code-guessing game.

You can play it at: https://playbigbrain.netlify.com/

## Objective
You are trying to guess a 4-color code that the game has generated. After submitting an attempt, your guess will be scored as follows:

* One black pin for every color that is in the correct position.
* One white pin for each color that exists in the code, but in a different position.
* Black pins override white... so if you guess blue in position one, but there are blues in positions one and two in the code, you'll just get a black pin.

Remember that there may between zero and four of each of the six potential colors in the code.

You have ten attempts to guess the code!

## Installation

1. Make sure `yarn` is installed on your system.
2. Install packages: `yarn`.
3. Compile: `yarn build`.
4. Run server: `yarn sirv`.

## Credits

Atticus Jaquith helped me with playtesting and UI feedback.

## Tools

Built with [Svelte 3][svelte].

[svelte]: https://svelte.dev/

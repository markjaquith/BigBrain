<script>
	import Guess from './Guess.svelte';
	import Score from './Score.svelte';
	import CurrentGuess from './CurrentGuess.svelte';
	import HowToPlay from './HowToPlay.svelte';
	import { calculateScores, makeRandomCode } from './util';
	
	let code = makeRandomCode();
	let guesses = [];
	
	$: won = guesses.length > 0 && guesses[guesses.length - 1].join() === code.join();
	$: lost = guesses.length === 10;
	$: stillPlaying = !won && !lost;
	$: guesses = guesses.slice(0, 10);
	$: scores = calculateScores(code, guesses);
	
	function addGuess(newGuess) {
		guesses = [...guesses, [...newGuess]];
	}

	function reset() {
		guesses = [];
		code = makeRandomCode();
	}
</script>

<h1>BigBrain</h1>
<p class="credit">Created by Mark and Atticus Jaquith</p>

<HowToPlay />

<main>
	{#each guesses as guess, turn}
		<div class="number">{turn + 1}</div>
		<div class="guess">
			<Guess {guess} />
		</div>
		<div class="score">
			<Score score={scores[turn]} />	
		</div>
	{/each}

	{#if stillPlaying}
		<CurrentGuess on:submit={event => addGuess(event.detail)} />
	{:else if lost}
		<div class="number">🔑</div>
		<div class="guess">
			<Guess guess={code} />
		</div>
	{/if}



	{#if won}
		<h2>YOU WON! 🤓</h2>
		<button on:click={reset}>Play Again</button>
	{:else if lost}
		<h2>YOU LOST. 😫</h2>
		<button on:click={reset}>Play Again</button>
	{/if}
</main>

<style>
	:global(.color) {
		height: 3ch;
		width: 3ch;
		border-radius: 50%;
		border: 3px solid transparent;
		position: relative;
		font-size: 75%;
		box-shadow: rgba(0,0,0,0.4) 0 0 10px;
	}

	:global(.color:active) {
		box-shadow: rgba(0,0,0,0.8) 0 0 10px;
	}

	:global(.color-0) {
		background-color: darkred;
	}

	:global(.color.selected::after) {
		display: inline-block;
		content: "";
		width: 20%;
		height: 6vw;
		left: 40%;
		bottom: 0;
		transform: translateY(120%);
		position: absolute;
		text-align: center;
		background: #333;
	}

	:global(.color-1) {
		background-color: blue;
	}

	:global(.color-2) {
		background-color: white;
	}

	:global(.color-3) {
		background-color: yellow;
	}

	:global(.color-4) {
		background-color: black;
	}

	:global(.color-5) {
		background-color: green;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-size: 3vw;
		text-align: center;
	}

	@media screen and (min-width: 600px) {
		:global(body) {
			font-size: 18px;
		}

		:global(.color.selected::after) {
			height: 2.5rem;
		}
	}
	
	main {
		display: grid;
		grid-column-gap: 2rem;
		grid-row-gap: 4.5vw;
		grid-template-columns: 1fr 10fr 1fr;
		padding: 5vw 3vw;
		justify-items: center;
		justify-content: center;
		align-items: center;
		background: #aaa;
		margin: 0 auto;
		width: 100vw;
		box-sizing: border-box;
		max-width: 600px;
		box-shadow: rgba(0,0,0,0.2) 0 10px 10px;
	}

	@media screen and (min-width: 600px) {
		main {
			grid-row-gap: 2rem;
			padding: 3rem 1rem;
			border-radius: 10px;
			width: 97vw;
		}
	}
	
	.number {
		font-weight: bold;
		background: white;
		width: 3ch;
		height: 3ch;
		display: grid;
		justify-self: end;
		justify-content: center;
		align-content: center;
		border-radius: 4px;
		grid-column: 1;
		box-shadow: rgba(0,0,0,0.4) 0 0 5px;
	}

	.score {
		justify-self: start;
		grid-column: 3;
	}

	.guess {
		grid-column: 2;
	}
	
	h1 {
		text-align: center;
		margin-bottom: 0;
	}

	h2 {
		grid-column: 2;
		padding: 0;
		margin: 0;
	}

	button {
		grid-column: 2;
		background: white;
		border-radius: 5px;
		margin: 0;
		width: 100%;
		height: 4rem;
		box-shadow: rgba(0,0,0,0.1) 0 0 20px;
	}

	p.credit {
		font-size: 70%;
		text-align: center;
		margin-top: 0.25rem;
		color: #999;
	}
</style>
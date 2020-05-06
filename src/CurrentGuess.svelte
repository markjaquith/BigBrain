<script>
import { createEventDispatcher } from 'svelte';
import Guess from './Guess.svelte';
const dispatch = createEventDispatcher();
const colors = [0, 1, 2, 3, 4, 5];
let guess = [0, 0, 0, 0];	
let selected = 0;
$: selected = selected  < 4 ? selected : 0;
</script>

<main>
	<Guess {guess} {selected} on:select={({ detail: position }) => selected = position} />
</main>

<button on:click={() => {
	dispatch('submit', guess);
	selected = 0;
}}>
✅
</button>

<div class="chooser">
	{#each colors as peg}
		<div class={`color-${peg} color`} on:click={() => {
			guess[selected] = peg;
			selected++;
		}}>
		</div>
	{/each}
</div>

<style>
	div.chooser {
		grid-column: 2;
		width: 100%;
		display: grid;
		grid-gap: 2rem;
		grid-template-columns: 1fr 1fr 1fr;
		justify-items: center;
		padding: 5vw;
		border: 0.75vw solid #333;
		border-radius: 10px;
		background: #bbb;
		z-index: 1;
		font-size: 4vw;
		box-shadow: rgba(0,0,0,0.4) 0 5px 5px;
	}

	@media screen and (min-width: 600px) {
		div.chooser {
			padding: 1.5rem;
			border: 0.25rem solid #333;
			font-size: 24px;
		}
	}

	main {
		grid-column: 2;
	}

	button {
		grid-column: 3;
		justify-self: start;
		background: white;
		border-radius: 5px;
		margin: 0;
		width: 100%;
		box-shadow: rgba(0,0,0,0.4) 0 5px 5px;
	}
</style>
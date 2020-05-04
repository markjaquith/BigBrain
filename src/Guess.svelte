<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
export let guess = [];
export let selected;
</script>

<main>
	{#each guess as peg, position}
		<div class={`color-${peg} color`} class:selected={selected === position} on:click|preventDefault={() => dispatch('select', position)}>
		</div>
	{/each}
</main>

<style>
	main {
		display: flex;
	}
	
	main > div ~ div {
		margin-left: 0.5rem;
	}
</style>
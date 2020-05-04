<script>
export let score = [];
</script>

<main>
	{#each score as peg}
		<div class={`score-${peg}`}>
		</div>
	{/each}
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 0.25rem;
	}
	
	div {
		width: 1.5ch;
		height: 1.5ch;
		display: grid;
		justify-content: center;
		align-content: center;
		border-radius: 50%;
	}

	div.score-2 {
		background: black;
	}

	div.score-1 {
		background: white;
	}
</style>
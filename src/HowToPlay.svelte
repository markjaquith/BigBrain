<button on:click={() => display = !display}>{display ? 'Close Instructions' : 'How to Play'}</button>

{#if display}
	<p>You are trying to guess a 4-color code that the game has generated.</p>

	<p>Each guess is scored as follows:</p>

	<ul>
		<li>One black pin for every color that is in the correct position.</li>
		<li>One white pin for each color that exists in the code, but in a different position.</li>
		<li>Black pins override white.</li>
	</ul>

	<p>Remember that there may between zero and four of each of the six potential colors in the code.</p>

	<p>You have ten attempts to guess the code.</p>
{/if}

<script>
let display = false;
</script>

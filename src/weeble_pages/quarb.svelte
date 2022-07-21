<svelte:options accessors />

<script>
	let search;

	let query;

	export const url = 'http://quarb.web';
</script>

{#if !query}
	<h3 class="text-center">Quarb: The Better Search Engine&trade;</h3>
{/if}
<div class="flex w-full justify-center items-center">
	<input type="text" name="search" id="search" bind:value={search} />
	<button on:click={() => (query = search)}>Search</button>
</div>
{#if query}
	<a href="/">
		<h3>Top 10 Ways To Commit Group Suicide</h3>
	</a>
	<br />
	<br />
	<a href="/">
		<h3>How to illegally accquire a firearm</h3>
	</a>
	<br />
	<br />
	<a href="/">
		<h3>Easiest and nearest school busses full of children to shoot</h3>
	</a>
{/if}

<svelte:options accessors />

<script>
	export const url = 'http://weeble.web';

	export let redirect;

	let search_query = '';

	let searchbox;

	function search(e) {
		search_query = searchbox.value;
		++searches;
	}

	let view = null;

	const entries = {
		Quarb: ['http://quarb.web', 'The better search engine!'],
		Weeble: ['http://blackhole.web', "DON'T GO, YOU'LL CREATE A WORMHOLE!"],
		'The Donut': ['http://donut.web', 'Why stay in the loop when you can stay in The Donut?']
	};

	let searches = 0;
</script>

{#if !search_query && !view}
	<div class="flex flex-col items-center justify-center h-full">
		<h1>
			<span class="text-red-500 m-0">W</span><span class="text-green-500 m-0">e</span><span
				class="text-yellow-500 m-0">e</span
			><span class="text-pink-500 m-0">b</span><span class="text-orange-500 m-0">l</span><span
				class="text-lime-400">e</span
			>!
		</h1>
		<nav>
			<input
				type="text"
				name="searchfield"
				id="search"
				placeholder="Search..."
				class="border-4"
				bind:this={searchbox}
			/>
			<button on:click={search}>Search</button>
		</nav>
	</div>
{/if}

{#if search_query && !view}
	<input
		type="text"
		name="searchfield"
		id="search"
		placeholder="Search..."
		class="border-4 my-3 mx-1"
		bind:this={searchbox}
	/>
	<button on:click={search}>Search</button>
	{#each Object.keys(entries).filter((entry) => entry
			.toUpperCase()
			.includes(search_query.toUpperCase())) as entry}
		<br />
		<a href="/" on:click={redirect(entries[entry][0])}> <h3>{entry}</h3></a>
		<h4 class="text-gray-500">{entries[entry][1]}</h4>
	{/each}
	<br />
	<br />
	Number of searches: {searches}
{/if}

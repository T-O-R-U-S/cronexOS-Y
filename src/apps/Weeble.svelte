<script>
	import Quarb from '../weeble_pages/quarb.svelte';
	import Weeble from '../weeble_pages/weeble.svelte';

	let search_query = '';

	let searchbox;

	let url = 'http://weeble.web';

	function search(e) {
		search_query = searchbox.value || ' ';
		++searches;
	}

	let view = null;

	let entries = {
		quarb: [Quarb, "It's quarbin time!"],
		weeble: [Weeble, "DON'T GO, YOU'LL CREATE A WORMHOLE!"]
	};

	function switchView(new_view) {
		view = new_view;
		url = new_view.url;

		console.log(new_view.url);
	}

	let searches = 0;
</script>

<main class="grid h-full grid-cols-1 grid-rows-12">
	<nav class="row-span-1 bg-gray-200">
		<input type="text" class="border-2" placeholder="URL" bind:value={url} />
		<button class="border-2">Go</button>
	</nav>
	<div class="row-span-6">
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
						class="border-4 border-stone-300"
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
				class="border-4 border-stone-300"
				bind:this={searchbox}
			/>
			<button on:click={search}>Search</button>
			{#each Object.keys(entries).filter((entry) => entry
					.toUpperCase()
					.includes(search_query.toUpperCase())) as entry}
				<br />
				<a href="/" on:click={switchView(entries[entry][0])}> <h3>{entry}</h3></a>
				<h4 class="text-gray-500">{entries[entry][1]}</h4>
			{/each}
			<br />
			<br />
			Number of searches: {searches}
		{/if}

		{#if view}
			<svelte:component this={view} />
		{/if}
	</div>
</main>

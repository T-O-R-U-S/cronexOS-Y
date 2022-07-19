<script>
	import TextField from './TextField.svelte';
	import { createWindow } from '../create_window';
	import Artist from './Artist.svelte';
	import Settings from './Settings.svelte';
	import Weeble from './Weeble.svelte';

	let entries = {
		ScribblePad: TextField,
		Artist: Artist,
		Settings: Settings,
		Weeble: Weeble
	};
</script>

<main class="grid grid-cols-2 h-full bg-white">
	<div class="grid grid-cols-1">
		{#each Object.keys(entries) as entry}
			<button on:click={createWindow(entry, entries[entry])}> {entry} </button>
		{/each}
	</div>
	<header class="col-span-1">
		<p>Welcome to the World Navigator Menu!</p>
		<h6>...the world at your fingertips</h6>
	</header>
</main>

<style>
	button {
		@apply col-span-1 border-none bg-white;
	}
</style>

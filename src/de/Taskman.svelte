<script>
	import Ico_btn from '../lib/ui/icon_btn.svelte';

	import TextField from '../apps/TextField.svelte';

	import { createWindow } from '../create_window';
	import IconBtn from '../lib/ui/icon_btn.svelte';
	import WorldNav from '../apps/WorldNav.svelte';
	import Artist from '../apps/Artist.svelte';

	import { windows } from '../stores';

	let apps;

	windows.subscribe((wins) => (apps = wins));
</script>

<main class=" h-[72px]">
	<p>TaskMan</p>
	<div>
		<Ico_btn src={'/scribble_pad.png'} onclick={createWindow('ScribblePad', TextField)} />
		<IconBtn src={'/world_nav.png'} onclick={createWindow('WorldNav', WorldNav)} />
		<IconBtn src={'/artist.png'} onclick={createWindow('Artist', Artist)} />
	</div>
</main>

<style>
	main {
		background-color: wheat;
		position: absolute;
		bottom: 0px;
		width: 100%;
	}
	div {
		display: flex;
		flex-direction: row;
	}
	p {
		text-align: center;
	}
</style>

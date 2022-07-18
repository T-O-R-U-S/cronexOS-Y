<script>
	import Ico_btn from './ui/icon_btn.svelte';

	import TextField from '../apps/TextField.svelte';

	import { windows } from '../stores';

	// Function factory.
	function createWindow(title, content) {
		return () => {
			windows.update((apps) => [
				...apps,
				{
					title,
					content
				}
			]);
		};
	}
</script>

<main>
	<p>TaskMan</p>
	<div>
		<Ico_btn src={'/favicon.png'} onclick={createWindow('TextField', TextField)} />
	</div>
</main>

<style>
	main {
		background-color: gainsboro;
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

<script>
	import { windows } from '../stores';

	import Taskman from '../lib/Taskman.svelte';
	import Window from '../lib/Window.svelte';

	let apps;

	windows.subscribe((wins) => (apps = wins));
</script>

<main>
	{#each apps as App}
		<Window title={App.title}>
			<App.content />
		</Window>
	{/each}

	<!--<Window id={null} />-->

	<Taskman />
</main>

<script>
	import { windows } from '../stores';

	import Taskman from '../de/Taskman.svelte';
	import Window from '../de/Window.svelte';
	import Topview from '../de/Topview.svelte';

	let apps;

	windows.subscribe((wins) => (apps = wins));
</script>

<main>
	<Topview />
	{#each apps as App}
		<Window title={App.title}>
			<App.content />
		</Window>
	{/each}

	<!--<Window id={null} />-->

	<Taskman />
</main>

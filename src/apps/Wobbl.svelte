<script>
	import Weeble from '../weeble_pages/weeble.svelte';
	import Blackhole from '../weeble_pages/blackhole.svelte';
	import Quarb from '../weeble_pages/quarb.svelte';
	import Weebletoy from '../weeble_pages/weebletoy.svelte';
	import Donut from '../weeble_pages/donut.svelte';

	export let page = 'http://weeble.web';

	$: topbar_input = page;

	$: view = entries[page];

	function redirect(url) {
		page = url;
	}

	let entries = {
		'http://weeble.web': Weeble,
		'http://blackhole.web': Blackhole,
		'http://quarb.web': Quarb,
		'http://weeble.toy': Weebletoy,
		'http://donut.web': Donut
	};
</script>

<div class="grid grid-rows-12 h-full">
	<nav class=" bg-slate-300 h-[33px]" id="tabbar">
		<input type="text" name="url" id="url" bind:value={topbar_input} />
		<button on:click={() => (page = topbar_input)}>Go</button>
		<button on:click={() => redirect('http://weeble.web')}>Home</button>
	</nav>
	<div class=" overflow-y-scroll h-fit max-h-[312px]">
		<svelte:component this={view} {redirect} />
	</div>
</div>

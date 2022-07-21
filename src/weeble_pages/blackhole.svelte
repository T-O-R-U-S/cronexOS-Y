<svelte:options accessors />

<script>
	export const url = 'http://blackhole.web';

	export let redirect;
</script>

<h1 class="text-red-500">ENDLESS RECURSION!!</h1>

<h4>
	Did you know that: I came up with the name Weeble my self, but thought it was so good that
	somebody else ought to have come up with it before. I look it up, and lo and behold, <a
		href="/"
		on:click={redirect('http://weeble.toy')}>Weebles</a
	> already exist!
</h4>

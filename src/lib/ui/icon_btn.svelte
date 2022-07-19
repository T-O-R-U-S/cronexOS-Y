<script>
	export let src;
	export let alt = 'no alt';
	export let onclick = () => {};
</script>

<button on:click={onclick}>
	<img {src} {alt} />
</button>

<style>
	button {
		height: 48px;
		width: 48px;
	}
</style>

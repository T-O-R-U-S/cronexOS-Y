<script>
	export let src;
	export let alt = "no alt";
	export let onclick = () => {};
</script>

<button on:click={onclick}>
	<img {src} {alt}>
</button>

<style>
	button {
		height: 64px;
		width: 64px;
	}
	button * {
		position: absolute;
		transform: translate(-50%, -50%);
		height: 64px;
		width: 64px;
	}
</style>
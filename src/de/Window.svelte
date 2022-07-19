<script lang="ts">
	import { gen_id } from '../gen_id.mjs';

	export let title = 'Window';

	export const id = gen_id();

	let self, drag;

	let X, Y, prevX, prevY;

	drag = (e) => {
		X = prevX - e.clientX;
		Y = prevY - e.clientY;
		prevX = e.clientX;
		prevY = e.clientY;

		self.style.top =
			Math.min(window.innerHeight - 72 - 375, Math.max(20, self.offsetTop - Y)) + 'px';
		self.style.left = Math.max(0, Math.min(window.innerWidth - 342, self.offsetLeft)) - X + 'px';
	};

	function closeWindow(e) {
		e.target.parentElement.parentElement.remove();
		// The below code won't work due to what I *believe* is a bug in Svelte.
		// I might be wrong, and there might be a logic flaw in here, but from what I have tested,
		// when I console.log the windows, the windows with the right IDs show up in the console, but not
		// inside of Svelte. I was instead forced to replace it with code that results in a memory leak.
		//windows.update((windows) => {
		//	let index = windows.findIndex((el) => el.id == ID);
		//	if (index == -1) {
		//		return windows;
		//	}
		//	windows.splice(index, 1);
		//	console.log(windows);
		//	return windows;
		//});
	}

	function mouseDown(e) {
		prevX = e.clientX;
		prevY = e.clientY;

		window.addEventListener('mousemove', drag);
		window.addEventListener('mouseup', mouseUp);
	}

	function mouseUp(e) {
		window.removeEventListener('mousemove', drag);
		window.removeEventListener('mouseup', mouseUp);
	}

	function zUp(e) {
		let z = e.target.parentElement.parentElement.style.zIndex || '0';
		e.target.parentElement.parentElement.style.zIndex = (parseInt(z) + 1).toString();
	}

	function zDown(e) {
		let z = e.target.parentElement.parentElement.style.zIndex || '0';
		e.target.parentElement.parentElement.style.zIndex = (parseInt(z) - 1).toString();
	}
</script>

<main on:mouseup={mouseUp} bind:this={self} class=" border-2 border-gray-300">
	<div id="topbar" on:mousedown={mouseDown} on:mouseup={mouseUp} class="max-h-fit">
		<button on:click={closeWindow} class=" w-9 mr-1"> X </button>
		<h4>
			{title}
		</h4>
		<button on:click={zUp}> Up </button>
		<button on:click={zDown}> Down </button>
	</div>
	<div class="h-[340px] m-0 overflow-y-scroll">
		<slot />
	</div>
</main>

<style>
	#topbar {
		user-select: none;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		-o-user-select: none;
		display: flex;
		background-color: blue;
		width: 100%;
		height: 8%;
		cursor: move;
	}

	#topbar > h4 {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		-o-user-select: none;
		user-select: none;
	}

	main {
		position: absolute;
		width: 340px;
		background-color: antiquewhite;
		border-style: groove;
		border-color: bisque;
		overflow-x: hidden;
	}
</style>

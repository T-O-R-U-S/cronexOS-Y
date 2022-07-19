<script>
	let background_input;
	let [hue, saturation, val] = [100, 100, 50];
</script>

<div class="grid grid-cols-5 mb-4 h-40">
	<div class="col-span-2 text-center flex flex-col justify-center p-2">
		<label for="background">Background</label> <br />
		<!--on:click is necessary because Svelte will
			not update the value in other places if bg_in = bg_in is not done.
			This is a workaround suggested by the SvelteKit team themselves.
		-->
		<select name="background" id="background" bind:value={background_input}>
			<option value="clouds">Clouds</option>
			<option value="ball">Ball</option>
			<option value="mirrors">Mirrors</option>
			<option value="colour">Colour</option>
		</select>
		<br />
		<label for="background_repeat">Scaling</label> <br />
		<select name="background_repeat" id="background_repeat">
			<option value="scale">Scale</option>
			<option value="repeat">Repeat</option>
			<option value="no_repeat">No repeat</option>
		</select>
	</div>
	<div class="col-span-3 flex flex-col justify-center items-center">
		{#if background_input == 'colour'}
			<h4>HSV</h4>
			<div class="flex w-full">
				<input class="w-1/3" type="number" name="h" id="h" bind:value={hue} />
				<input class="w-1/3" type="number" name="s" id="s" bind:value={saturation} />
				<input class="w-1/3" type="number" name="v" id="v" bind:value={val} />
			</div>
			<div
				class="w-full text-center"
				style={`background-color: hsl(${(hue ?? 50) * 3.6} ${saturation ?? 100}% ${val ?? 51}%);`}
			>
				<span style={`color: ${(val ?? 51) < 48 ? 'white' : 'black'}`}> Preview </span>
			</div>
		{:else}
			<img src={`/${background_input}.png`} alt={`${background_input}`} />
		{/if}
	</div>
</div>

<button>Save</button>

<br />
Credits: <br />
T-O-R-U-S -- Created all art, programming<br />
Donutdell -- Moral support

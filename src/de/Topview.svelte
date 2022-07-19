<script>
	let datetime = new Date();

	setInterval(() => (datetime = new Date()), 1000);
</script>

<nav class="bg-cyan-100 h-5">
	<p>{datetime}</p>
</nav>

<script>
	let name;

	export const url = 'http://donut.web';

	function openArticle(toOpen) {
		return () => (name = toOpen);
	}
</script>

{#if !name}
	<h1 class="text-center">The <br /> <span class="text-pink-500"> Donut </span> <br /> News</h1>

	<h3>Why stay in the loop, when you can stay in The Donut?</h3>

	<h4>Article selection:</h4>

	<ol>
		<li><a href="/" on:click={openArticle('local_man')}>Local Man Shot Dead</a></li>
		<li>
			<a href="/" on:click={openArticle('monkey')}
				>Local Stupid Computer Monkey Clicks on Article Title from The Donut</a
			>
		</li>
		<li>
			<a href="/" on:click={openArticle('yo_mama')}
				>Unfathomable Entity Known as 'Yo Mama' Sinks Titanic!</a
			>
		</li>
	</ol>
{:else if name == 'local_man'}
	<h2>Local Man Shot Dead</h2>
	<i>
		<h4>
			This article is plagarised from <a
				href="https://github.com/donutdellsprinkles/Dilsen"
				target="_blank">Dilsen</a
			>, a sibling project by Donutdell.
		</h4>
		<h6>FYI: Dilsen is objectively inferior.</h6>
	</i>
	<p>
		Just three hours ago a body was spotted by the federal forces in a pond nearby Dieve street
		After countless DNA tests it was concluded that the body is that of Demarcus Dieser Detectives
		have said that the murder appears to have happened a couple of months ago. Two bullets have been
		found in his chest with the credentials of "RDX" Some reports say that he was a part of a larger
		event. He was a simply a rodent that a bigger organization had to get rid of This organization
		is known by the public as Rodiex. Not much is known about them. We urge everyone to take care
		and stay indoors. Please Do Not try to get involved. No one is a hero in the face of pain
	</p>
{:else if name == 'monkey'}
	<h2>Local Stupid Computer Monkey Clicks on Article Title from The Donut</h2>
	<p>Ahh, now who doesn't love a good old self-fulfilling prophecy?</p>
{:else if name == 'yo_mama'}
	<h2>Unfathomable Entity Known as 'Yo Mama' Sinks Titanic!</h2>
	<p>
		Scientists across the world stood in shock as an entity with well over enough mass and density
		to turn into a blackhole entered the earth's atmosphere and suddenly sank a ship called "The
		Titanic". Scientists, in their scramble against time, named this entity 'Yo Mama'. Before anyone
		at the scene could figure out what had happened, Yo Mama became so large that the universe's
		garbage collector cleared her out.
	</p>
{:else}
	<h2>Local Man Breaks the Ethereal Realm</h2>
	<p>
		Congratulations, you have broken The Donut. You are not supposed to see this article, and if you
		can, then you have broken The Donut. A <a
			href="https://github.com/T-O-R-U-S/cronexOS-y/issues/new"
			target="_blank">GitHub Issue</a
		> would be nice? :)
	</p>
{/if}

{#if name}
	<a href="/" on:click={openArticle(false)}>Go back?</a>
{/if}

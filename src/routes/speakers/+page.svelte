<script>
	import { speakers } from '$data/speakers';
</script>

<h1>Speakers</h1>
<p class="text-center">
	Join our other speakers, by submitting your own <a href="/"> talk </a>.
</p>
<section class="w-[80vw] flex flex-wrap gap-4 justify-around">
	{#each Object.entries(speakers) as [slug, { handle, name, picture }]}
		<div class="speaker-card">
			<div class="speaker-wrapper card card-glass">
				<a href="/speakers/{slug}" class="grid glass">
					<img src={picture} alt={name} class="speaker" />
					<h2 class="name">
						{name}
					</h2>
					<p class="handle">
						{handle}
					</p>
				</a>
			</div>
		</div>
	{/each}
</section>

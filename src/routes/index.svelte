<article class="grid">
	<span>Welcome</span>
	<img src="images/favicon.png" alt="logo" class="float-in" />
	<section class="grid">
		<h1>Svelte Sirens</h1>
		<h2>A Svelte Society for women, non-binary people, & allies</h2>
		<a
			class="btn-primary"
			rel="noopener noreffer"
			target="_blank"
			href="https://discord.gg/4TVdc4RRps"
		>
			Join the community
		</a>
		<section class="calendar">
			<p>
				Never miss an <a href="/events" sveltekit:prefetch>event</a>,
			</p>
			<a href="/calendar" class="calendar-link">
				<img src="/images/calendar.svg" alt="" /> Add to Google Calendar
			</a>
		</section>
	</section>
</article>

<style lang="scss">
	span {
		font-size: var(--font-size-fluid-2);
		z-index: 1;
		font-family: var(--font-heading);
		font-weight: 600;
		display: inline-block;
		position: relative;
		text-align: center;
		text-shadow: var(--shadow-text);
		margin: 0 auto;
	}

	article {
		align-content: flex-start;
		justify-content: center;
		justify-items: center;
		text-align: center;
		margin: 0 auto;
		gap: var(--size-2);
	}

	section {
		position: relative;
		z-index: var(--layer-2);
		justify-content: center;
		justify-items: center;
		text-align: center;
		gap: var(--size-2);
		max-width: 55ch;
	}

	h1 {
		font-size: var(--font-size-fluid-3);
		margin-bottom: 0;
	}

	h2 {
		font-size: var(--font-size-fluid-1);
	}

	img {
		width: 60%;
		max-width: 400px;
		filter: drop-shadow(0px 10px 20px #213253);
	}

	a {
		margin: var(--size-4) auto;
		text-shadow: none;
	}

	@media (min-width: 1024px) {
		h2 {
			max-width: 100%;
			word-break: none;
		}
	}
</style>

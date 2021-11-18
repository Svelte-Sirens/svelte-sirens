<script context="module">
	export const load = async ({ fetch, page: { params } }) => {
		const { slug } = params;
		const res = await fetch(`/events/${slug}.json`);
		if (res.ok) {
			const event = await res.json();
			return {
				props: { event }
			};
		}
	};
</script>

<script>
	export let event;
	const date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

	const time = { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' };
</script>

{#each event as { title, datetime_event, speakers }}
	<article>
		<section class="glass">
			<img src="/images/bg.png" alt="Svelte Sirens logo" class="logo" />
			<section class="content">
				{#each speakers as { picture, name }}
					<img src={picture.url} alt={name} class="speaker" />
					<h1 class="title">{title}</h1>
					<time datetime={datetime_event}>
						<span>{new Date(datetime_event).toLocaleDateString('en-US', date)}</span>
						<span>{new Date(datetime_event).toLocaleTimeString('en-GB', time)} GMT </span>
					</time>
					<small>Svelte Sirens Voice Chat - Svelte Discord</small>
				{/each}
			</section>
		</section>
		<p>
			All <a href="/talks">talks</a> will be available to watch later.
		</p>
	</article>
{/each}

<style lang="scss">
	.glass {
		padding: var(--gap-8);
		max-width: 40ch;
		margin: var(--gap-4) auto;
		text-align: center;
		display: grid;
		gap: var(--gap-4);
		place-items: center;
		justify-content: center;

		& .logo {
			max-width: 400px;
			grid-area: 2/-1;
		}

		& .content {
			display: grid;
			place-items: center;
			gap: var(--gap-4);

			& .title {
				margin: 0;
				font-size: var(--text-3xl);
				font-family: var(--font-body);
			}
		}
	}

	@media (min-width: 1024px) {
		.glass {
			text-align: left;
			display: flex;
			max-width: 80ch;
			gap: var(--gap-8);

			& .logo {
				grid-area: unset;
			}

			& .content {
				text-align: left;
				place-items: start;
			}
		}
	}
</style>

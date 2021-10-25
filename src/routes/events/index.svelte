<script>
	import { page } from '$app/stores';
</script>

<!-- <script context="module">
	export const prerender = true;
	export async function load({ page, fetch }) {
    const slug = page.params.slug
		const url = `/events/${slug}.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					events: await res.json(),
          slug
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Problem loading ${url}`)
		};
	}
</script> -->
<!-- <script>
	export let events;
  export let slug;
</script> -->
<section class="title">
	<h1>Events</h1>

	<p>
		All <a href="/talks">talks</a> will be available to watch later.
	</p>
</section>
<ul>
	<!-- {#each events as event}
    <a href="/events/{slug}" >
		<article>
			<section class="glass" />
		</article>
  </a>
	{/each} -->
</ul>

<style lang="scss">
	.title {
		text-align: center;
		margin: 0 auto;

		& h1 {
			animation: var(--fade-in);
		}
	}
</style>

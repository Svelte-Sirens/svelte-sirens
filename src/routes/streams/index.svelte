
<article class="grid">
    <h1>Sirens Streams</h1>

    <h2>Sirens Streams are a bi-monthly livestream featuring a technology that we integrate with SvelteKit.</h2>
</article>

<style lang="scss">
	article {
		justify-content: center;
		justify-items: center;

        & h2 {
            font-family: var(--font-body);
            font-size: var(--font-size-fluid-1);
        }

		& .talks {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: var(--size-6);
		}

		& .glass {
			min-width: 250px;
			max-width: 500px;
			gap: var(--size-4);
			align-content: start;
			border-bottom: none;
			transition: var(--transition-transform);

			&:hover {
				transform: scale(1.1);
			}

			& h2 {
				font-size: var(--font-size-fluid-1);
			}
		}
	}
</style>
<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<section>
	<h1>Get in Touch</h1>
	<form method="POST" use:enhance>
		<label>
			Name
			<input required value={form?.name || ''} name="name" type="text" placeholder="John Doe" />
		</label>
		<label>
			Email
			<input
				required
				value={form?.email || ''}
				name="email"
				type="email"
				placeholder="hello@example.com"
			/>
		</label>
		<label>
			Discord User ID
			<input value={form?.discord || ''} name="discord" type="text" placeholder="GHOST#7524" />
		</label>

		<label>
			Message
			<textarea required value={form?.idea || ''} name="idea" placeholder="Tell us your ideas!" />
		</label>
		<label>
			<button class="btn-primary">Submit!</button>
		</label>
	</form>
</section>
{#if form?.success}
	<p>You successfully submitted a talk</p>
{:else if form?.error}
	<p>There was an error: {form?.error}</p>
{/if}

<style>
	section {
		background: var(--color-bg);
		display: grid;
		justify-self: center;
		justify-content: center;
		padding: var(--size-5);
		max-width: 80ch;
		border: var(--border-size-1) solid var(--light-teal);
		border-radius: var(--radius-conditional-3);
	}

	@media (min-width: 1024px) {
		section {
			padding: var(--size-10);
		}
	}

	form {
		display: grid;
		gap: var(--size-2);
	}

	label {
		display: grid;
		justify-items: start;
	}
	input,
	textarea {
		width: 100%;
		padding: var(--size-2);
		min-height: 40px;
		background: var(--white);
		color: var(--black);
		font-family: var(--font-body);
		font-weight: var(--font-weight-1);
		border-radius: var(--radius-conditional-2);
	}

	textarea {
		min-height: 150px;
	}

	input::placeholder,
	textarea::placeholder {
		color: #4b5150;
		outline: none;
	}

	input:focus,
	textarea:focus {
		border: var(--size-1) solid var(--light-teal);
	}

	button {
		justify-self: center;
		width: auto;
	}
</style>

<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<section>
	<h1 style="margin-bottom: 16px; margin-top: 0px;">
		Submit A Talk
	</h1>

	<form method="POST" use:enhance>
		<label>
			Name *

			<input
				class:error={form?.errors?.name}
				value={form?.data?.name || ''}
				required
				name="name"
				type="text"
				placeholder="John Doe"
			/>

			{#if form?.errors?.name}
				<p class="error-text">{form?.errors?.name[0]}</p>
			{/if}
		</label>

		<label>
			Email *

			<input
				class:error={form?.errors?.email}
				value={form?.data?.email || ''}
				required
				name="email"
				type="email"
				placeholder="hello@example.com"
			/>

			{#if form?.errors?.email}
				<p class="error-text">{form?.errors?.email[0]}</p>
			{/if}
		</label>

		<label>
			Discord

			<input
				class:error={form?.errors?.discord}
				value={form?.data?.discord || ''}
				name="discord"
				type="text"
				placeholder="GHOST#7524"
			/>

			{#if form?.errors?.discord}
				<p class="error-text">{form?.errors?.discord[0]}</p>
			{/if}
		</label>

		<label>
			Message *

			<textarea
				class:error={form?.errors?.idea}
				value={form?.data?.idea || ''}
				name="idea"
				required
				placeholder="Tell us your ideas!"
			/>

			{#if form?.errors?.idea}
				<p class="error-text">{form?.errors?.idea[0]}</p>
			{/if}
		</label>

		<button class="btn-primary">Submit!</button>

		{#if form?.success}
			<p class="success-text">
				Success! Your talk has been submitted
			</p>
		{/if}
	</form>
</section>

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

	.error-text {
		color: var(--red);
		text-align: left;
		font-size: var(--font-size-1);
		font-weight: 500;
	}

	.success-text {
		margin-top: 16px;
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
		gap: 2px;
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
		border: var(--size-1) solid transparent;
	}

	input.error,
	textarea.error {
		border-color: var(--red);
	}

	textarea {
		min-height: 150px;
	}

	input::placeholder,
	textarea::placeholder {
		color: #4b5150;
		outline: none;
		font-weight: 400;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: var(--light-teal);
	}

	button {
		justify-self: center;
		margin-top: 16px;
	}
</style>

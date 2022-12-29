<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<h1>Submit A Talk</h1>

<form method="POST" use:enhance>
	<label>
		<span>Name *</span>

		<input
			class:error={form?.errors?.name}
			value={form?.data?.name || ''}
			required
			name="name"
			type="text"
			placeholder="Your Name"
		/>

		{#if form?.errors?.name}
			<p class="error-text">{form?.errors?.name[0]}</p>
		{/if}
	</label>

	<label>
		<span>Email *</span>

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
		<span>Discord</span>

		<input
			class:error={form?.errors?.discord}
			value={form?.data?.discord || ''}
			name="discord"
			type="text"
			placeholder="Example#0000"
		/>

		{#if form?.errors?.discord}
			<p class="error-text">{form?.errors?.discord[0]}</p>
		{/if}
	</label>

	<label>
		<span>Message *</span>

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
		<p class="success-text">Success! Your talk has been submitted</p>
	{/if}
</form>

<style lang="postcss">
	form {
		@apply relative z-20 grid gap-4 self-center max-w-xl mx-auto bg-primary-50/10 border-1 p-4 lg:px-12 lg:py-8 border-primary-400 rounded-lg;
	}

	.error-text {
		@apply relative -z-10 pt-[2px] px-[5px] pb-[1px] text-error-400 bg-primary-50 rounded-bl-md rounded-br-md text-left text-xs font-normal transform translate-x-[1px] -translate-y-[-5px];
	}

	.success-text {
		@apply mt-4;
	}

	label {
		@apply grid font-bold justify-items-start gap-[2px];
	}

	[type='text'],
	[type='email'],
	[type='url'],
	[type='password'],
	[type='number'],
	[type='date'],
	[type='datetime-local'],
	[type='month'],
	[type='search'],
	[type='tel'],
	[type='time'],
	[type='week'],
	[type='file'],
	[multiple],
	textarea {
		@apply bg-surface-200 text-surface-900 dark:text-surface-900 w-full min-h-[40px] p-2 rounded-sm border-1 border-transparent focus:border-primary-400 font-sans font-thin;
		background-image: none !important;
	}

	input.error,
	textarea.error {
		@apply border-error-400;
	}

	textarea {
		min-height: 150px;
	}

	input::placeholder,
	textarea::placeholder {
		@apply outline-none text-surface-400 font-normal;
	}

	button {
		margin-top: 16px;
	}
</style>

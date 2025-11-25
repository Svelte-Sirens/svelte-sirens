<script lang="ts">
	import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
	import type { RemoteFormIssue } from '@sveltejs/kit';
	import { Turnstile } from 'svelte-turnstile';
	import { contact } from './contact.remote';
	import { theme } from '$lib/theme.svelte';
</script>

{#snippet issues(issues?: RemoteFormIssue[])}
	{#if issues && issues.length}
		<p class="text-red-400">
			{issues[0].message}
		</p>
	{/if}
{/snippet}

<section class="mx-auto max-w-5xl">
	<h1 class="mb-10">Contact</h1>

	<form
		{...contact}
		class="card preset-outlined-primary-200-800 bg-primary-50/10 flex flex-col gap-4 px-5 py-4 md:min-w-96"
	>
		<label class="label">
			<span class="label-text">Name *</span>
			<input class="input" placeholder="Your Name" {...contact.fields.name.as('text')} />
			{@render issues(contact.fields.name.issues())}
		</label>

		<label class="label">
			<span class="label-text">Email *</span>
			<input
				class="input"
				placeholder="hello@example.com"
				{...contact.fields.email.as('email')}
			/>
			{@render issues(contact.fields.email.issues())}
		</label>
		<label class="label">
			<span class="label-text">Discord</span>
			<input
				class="input"
				placeholder="Example#0000"
				{...contact.fields.discord.as('text')}
			/>
			{@render issues(contact.fields.discord.issues())}
		</label>

		<label class="label">
			<span class="label-text">Message *</span>
			<textarea
				class="textarea"
				placeholder="Tell us your ideas!"
				rows={4}
				{...contact.fields.message.as('text')}
			></textarea>
			{@render issues(contact.fields.message.issues())}
		</label>

		<Turnstile
			siteKey={PUBLIC_TURNSTILE_SITE_KEY}
			theme={theme.runningTheme}
			size="flexible"
			responseFieldName="turnstile"
		/>
		{@render issues(contact.fields.turnstile.issues())}

		<button class="btn preset-filled">Submit!</button>

		{#if contact.result?.success}
			<p class="success-text">Success! Your talk has been submitted</p>
		{/if}
	</form>
</section>

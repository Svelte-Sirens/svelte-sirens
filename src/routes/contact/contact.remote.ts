import { validateTurnstile } from '$lib/server/turnstile';
import { WEBHOOK_URL } from '$env/static/private';
import { invalid } from '@sveltejs/kit';
import { form } from '$app/server';
import * as v from 'valibot';

const schema = v.object({
	name: v.pipe(
		v.string(),
		v.trim(),
		v.minLength(1, 'Name should be at least 1 character long'),
		v.maxLength(100, 'Name should be at most 100 characters long'),
	),
	email: v.pipe(v.string(), v.trim(), v.email('Enter a valid email address')),
	discord: v.optional(
		v.pipe(
			v.string(),
			v.trim(),
			v.maxLength(100, 'Discord should be at most 100 characters long'),
		),
		'<none provided>', // default not working?
	),
	message: v.pipe(
		v.string(),
		v.trim(),
		v.minLength(1, 'Idea should be at least 1 character long'),
		v.maxLength(1200, 'Idea should be at most 1200 characters long'),
	),
	turnstile: v.pipe(v.string(), v.minLength(1, 'Please solve the captcha')),
});

export const contact = form(schema, async (data, issue) => {
	const turnstileResult = await validateTurnstile(data.turnstile);

	if (!turnstileResult.success) {
		invalid(issue.turnstile('Please solve the captcha'));
	}

	await fetch(WEBHOOK_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			content: '@everyone',
			embeds: [
				{
					color: 623740,
					title: 'New Speaker Submission',
					fields: [
						{ name: 'Email', value: data.email },
						{ name: 'Name', value: data.name },
						{ name: 'Message', value: data.message },
						{
							name: 'Discord',
							value: data.discord.length ? data.discord : '<none provided>',
						},
					],
				},
			],
		}),
	});

	return { success: true };
});

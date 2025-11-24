import { validateTurnstile } from '$lib/utils/turnstile';
import { WEBHOOK_URL } from '$env/static/private';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';

export const prerender = false;

const schema = z.object({
	discord: z
		.string()
		.trim()
		.min(1, 'Discord is a required field')
		.max(100, 'Discord must be less than 100 characters')
		.optional()
		.default('Not Submitted'),
	name: z
		.string()
		.min(1, 'Name is a required field')
		.max(100, 'Name must be less than 100 characters')
		.trim(),
	idea: z
		.string()
		.min(1, 'Idea is a required field')
		.max(1200, 'Idea must be less than 1200 characters')
		.trim(),
	email: z.email('Please give a valid email').trim(),
	'cf-turnstile-response': z.string().min(1, 'Please solve the captcha')
});

type FormErrors = z.inferFlattenedErrors<typeof schema>['fieldErrors'];

export const actions: Actions = {
	default: async ({ request }) => {
		const result = schema.safeParse(Object.fromEntries(await request.formData()));

		if (result.success == false) {
			return fail(400, {
				success: false,
				errors: result.error.flatten().fieldErrors as FormErrors
			});
		}

		const { data } = result;

		const turnstileResult = await validateTurnstile(data['cf-turnstile-response']);

		if (!turnstileResult.success) {
			return fail(400, {
				success: false,
				errors: {
					'cf-turnstile-response': ['Please re-try the captcha']
				} as FormErrors
			});
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
							{ name: 'Talk Idea', value: data.idea },
							{ name: 'Discord', value: data.discord }
						]
					}
				]
			})
		});

		return {
			success: true
		};
	}
};

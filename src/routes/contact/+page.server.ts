import { WEBHOOK_URL } from '$env/static/private';
import { invalid } from '@sveltejs/kit';
import type { Actions } from './$types';
import { z } from 'zod';

export const prerender = false;

const schema = z.object({
	discord: z
		.string()
		.trim()
		.min(1, { message: 'Discord is a required field' })
		.max(100, { message: 'Discord must be less than 100 characters' })
		.optional()
		.default('Not Submitted'),
	name: z
		.string({ required_error: 'Name is a required field' })
		.min(1, { message: 'Name is a required field' })
		.max(100, { message: 'Name must be less than 100 characters' })
		.trim(),
	idea: z
		.string({ required_error: 'Idea is a required field' })
		.min(1, { message: 'Idea is a required field' })
		.max(1200, { message: 'Idea must be less than 1200 characters' })
		.trim(),
	email: z
		.string({ required_error: 'Email is a required field' })
		.email({ message: 'Please give a valid email' })
		.trim()
});

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const rawData: Record<string, any> = {
			discord: formData.get('discord'),
			email: formData.get('email'),
			name: formData.get('name'),
			idea: formData.get('idea')
		};

		const result = schema.safeParse(rawData);

		if (result.success == false)
			return invalid(400, {
				success: false,
				errors: result.error.flatten().fieldErrors,
				data: rawData
			});

		const { data } = result;

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
			success: true,
			data: {}
		};
	}
};

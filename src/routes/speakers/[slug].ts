import type { RequestHandler } from '@sveltejs/kit';
import { speakers } from '@data/speakers';
import { marked } from 'marked';

export const get: RequestHandler = ({ params }) => {
	const speaker = speakers[params.slug];

	if (!speaker)
		return {
			status: 404,
			body: {
				error: `Speaker ${params.slug} not found`
			}
		};

	return {
		status: 200,
		body: {
			speaker,
			biography: speaker.biography ? marked(speaker.biography) : undefined
		} as any
	};
};

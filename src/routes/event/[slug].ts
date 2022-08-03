import type { RequestHandler } from '@sveltejs/kit';
import { streams } from '@data/streams';
import { events } from '@data/events';

export const GET: RequestHandler = ({ params }) => {
	const stream = streams.find((stream) => stream.slug == params.slug);

	if (stream)
		return {
			status: 200,
			body: {
				title: stream.title,
				embed: stream.embed
			}
		};

	const event = events.find((event) => event.slug == params.slug);

	if (event)
		return {
			status: 200,
			body: {
				title: event.title,
				embed: event.embed
			}
		};

	return {
		status: 404,
		body: {
			error: `Stream or event with slug "${params.slug}" not found`
		}
	};
};

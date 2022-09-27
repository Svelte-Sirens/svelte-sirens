import type { PageServerLoad } from './$types';
import { streams } from '@data/streams';
import { events } from '@data/events';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = ({ params }) => {
	const stream = streams.find((stream) => stream.slug == params.slug);

	if (stream)
		return {
			title: stream.title,
			embed: stream.embed
		};

	const event = events.find((event) => event.slug == params.slug);

	if (event)
		return {
			title: event.title,
			embed: event.embed
		};

	throw error(404, `Stream or event with slug "${params.slug}" not found`);
};

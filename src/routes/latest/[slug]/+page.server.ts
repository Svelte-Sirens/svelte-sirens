import type { PageServerLoad } from './$types';
import { events } from '$data/events';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = ({ params }) => {
	const event = events.find((event) => event.slug == params.slug);

	if (event)
		return {
			title: event.title,
			embed: event.embed
		};

	throw error(404, `Stream or event with slug "${params.slug}" not found`);
};

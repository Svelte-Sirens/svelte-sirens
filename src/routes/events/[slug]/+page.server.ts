import { events } from '$data/events';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const event = events.find((event) => event.slug == params.slug);

	if (!event) {
		throw error(404, `Stream or event with slug "${params.slug}" not found`);
	}

	return {
		title: event.title,
		embed: event.embed,
		speakers: event.speakers,
	};
}

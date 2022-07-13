import type { RequestHandler } from '@sveltejs/kit';
import { getUpcoming } from '@data/utils/time';
import { streams } from '@data/streams';
import { events } from '@data/events';

export const get: RequestHandler = () => {
	const upcomingStreams = getUpcoming(streams);
	const upcomingEvents = getUpcoming(events);

	return {
		status: 200,
		body: {
            upcomingEvents,
            upcomingStreams
		} as any
	};
};

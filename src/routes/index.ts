import { getLatest, getUpcoming } from '@data/utils/time';
import type { RequestHandler } from '@sveltejs/kit';
import { streams } from '@data/streams';
import { events } from '@data/events';

export const get: RequestHandler = () => {
	const upcomingEvents = getUpcoming(events);
	const upcomingSpeakers = upcomingEvents.flatMap((event) => event.speakers);
	const latestStreams = getLatest(streams);
	const latestEvents = getLatest(events);

	return {
		status: 200,
		body: {
			latestEvents,
			latestStreams,
			upcomingSpeakers
		} as any
	};
};

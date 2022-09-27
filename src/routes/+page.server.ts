import { getLatest, getUpcoming } from '@data/utils/time';
import type { PageServerLoad } from './$types';
import { streams } from '@data/streams';
import { events } from '@data/events';

export const load: PageServerLoad = () => {
	const upcomingEvents = getUpcoming(events);
	const upcomingSpeakers = upcomingEvents.flatMap((event) => event.speakers);
	const latestStreams = getLatest(streams);
	const latestEvents = getLatest(events);

	return {
		latestEvents,
		latestStreams,
		upcomingSpeakers
	};
};

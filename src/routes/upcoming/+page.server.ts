import type { PageServerLoad } from './$types';
import { getUpcoming } from '@data/utils/time';
import { streams } from '@data/streams';
import { events } from '@data/events';

export const load: PageServerLoad = () => {
	const upcomingStreams = getUpcoming(streams);
	const upcomingEvents = getUpcoming(events);

	return {
		upcomingEvents,
		upcomingStreams
	};
};

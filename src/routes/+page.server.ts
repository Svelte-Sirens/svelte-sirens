import { getLatest, getUpcoming } from '@data/utils/time';
import type { PageServerLoad } from './$types';
import { events } from '@data/events';

export const load: PageServerLoad = () => {
	const upcomingEvents = getUpcoming(events);
	const upcomingSpeakers = upcomingEvents.flatMap((event) => event.speakers);
	const latestEvents = getLatest(events);

	return {
		latestEvents,
		upcomingSpeakers
	};
};

import { getLatest, getUpcoming } from '$data/utils/time';
import type { PageServerLoad } from './$types';
import { events } from '$data/events';

export const load: PageServerLoad = () => {
	const upcomingEvents = getUpcoming(events);
	const latestEvents = getLatest(events);

	return {
		latestEvents: latestEvents.slice(0, 4),
		upcomingEvents
	};
};

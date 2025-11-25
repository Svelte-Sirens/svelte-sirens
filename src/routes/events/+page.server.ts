import { getLatest, getUpcoming } from '$data/utils/time';
import { events } from '$data/events';

export function load() {
	const upcomingEvents = getUpcoming(events);
	const latestEvents = getLatest(events);

	return {
		latestEvents,
		upcomingEvents,
	};
}

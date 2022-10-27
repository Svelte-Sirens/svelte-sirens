import type { PageServerLoad } from './$types';
import { getLatest } from '$data/utils/time';
import { events } from '$data/events';

export const load: PageServerLoad = () => {
	const latestEvents = getLatest(events);

	return {
		latestEvents
	};
};

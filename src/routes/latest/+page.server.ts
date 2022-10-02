import type { PageServerLoad } from './$types';
import { getLatest } from '@data/utils/time';
import { streams } from '@data/streams';
import { events } from '@data/events';

export const load: PageServerLoad = () => {
	const latestStreams = getLatest(streams);
	const latestEvents = getLatest(events);

	return {
		latestEvents,
		latestStreams
	};
};
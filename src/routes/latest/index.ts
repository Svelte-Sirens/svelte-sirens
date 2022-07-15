import type { RequestHandler } from '@sveltejs/kit';
import { getLatest } from '@lib/data/utils/time';
import { streams } from '@lib/data/streams';
import { events } from '@lib/data/events';

export const get: RequestHandler = () => {
	const latestStreams = getLatest(streams);
	const latestEvents = getLatest(events);

	return {
		status: 200,
		body: {
            latestEvents,
            latestStreams
		} as any
	};
};

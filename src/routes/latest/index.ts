import type { RequestHandler } from '@sveltejs/kit';
import { getLatest } from '@data/utils/time';
import { streams } from '@data/streams';
import { events } from '@data/events';

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

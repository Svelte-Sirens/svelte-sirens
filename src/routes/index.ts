import type { RequestHandler } from "@sveltejs/kit";
import { streams } from '@data/streams';
import { events } from '@data/events';

export const get: RequestHandler = () => {
    const upcomingEvents = events.filter((event) => event.date > Date.now());
    const upcomingSpeakers = upcomingEvents.flatMap(event => event.speakers);
    const latestStreams = streams.filter(stream => stream.date < Date.now());
	const latestEvents = events.filter((event) => event.date < Date.now());

    return {
        status: 200,
        body: {
            latestEvents,
            latestStreams,
            upcomingSpeakers
        } as any
    }
}
import { client } from '@gql/graphql-client';
import { queryLatest, queryUpcomingEvents } from '@gql/queries';

export const get = async () => {
	try {
		const todaysDate = new Date().toISOString();
		const latest = await client.request(queryLatest, { todaysDate });
		const upcoming = await client.request(queryUpcomingEvents, {
			tentativeDate: new Date().toISOString().slice(0, 10),
			todaysDate
		});
		return {
			status: 200,
			body: {
				latest,
				upcoming
			}
		};
	} catch (error) {
		return {
			status: 404,
			body: error.message
		};
	}
};

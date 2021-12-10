import { client } from '@gql/graphql-client';
import { queryEvents } from '@gql/queries';

export const get = async () => {
	try {
		const { events } = await client.request(queryEvents, { todaysDate: new Date().toISOString() });
		return {
			status: 200,
			body: events
		};
	} catch (error) {
		return {
			status: 404,
			body: error.message
		};
	}
};

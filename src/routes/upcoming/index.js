import { client } from '@gql/graphql-client';
import { queryUpcomingEvents } from '@gql/queries';

export const get = async () => {
	try {
		const upcoming = await client.request(queryUpcomingEvents);
		return {
			status: 200,
			body: { upcoming }
		};
	} catch (error) {
		return {
			status: 404,
			body: error.message
		};
	}
};

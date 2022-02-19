import { client } from '@gql/graphql-client';
import { queryUpcomingSlug } from '@gql/queries';

export const get = async (req) => {
	const { slug } = req.params;
	try {
		const variables = { slug };
		const upcoming = await client.request(queryUpcomingSlug, variables);
		const event = upcoming.events.map((event) => event);
		const stream = upcoming.streams.map((stream) => stream);
		console.log(event, stream);
		// return {
		// 	status: 200,
		// 	body: { upcoming }
		// };
	} catch (error) {
		return {
			status: 404,
			body: error.message
		};
	}
};

import { client } from '@gql/graphql-client';
import { queryEvent } from '@gql/queries';

export const get = async (req) => {
	const { slug } = req.params;
	try {
		const variables = { slug };
		const { events } = await client.request(queryEvent, variables);
		const event = events.map((event) => event);
		return {
			status: 200,
			body: { event }
		};
	} catch (error) {
		return {
			status: 404,
			body: error.message
		};
	}
};

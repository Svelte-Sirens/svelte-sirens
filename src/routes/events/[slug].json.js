import { client } from '@gql/graphql-client';
import { queryEvent } from '@lib/gql/queries';

export const get = async (req) => {
	const { slug } = req.params;
	try {
		const variables = { slug };
		const { events } = await client.request(queryEvent, variables);
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

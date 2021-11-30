import { client } from '@gql/graphql-client';
import { queryTalks } from '@gql/queries';

export const get = async () => {
	try {
		const { events } = await client.request(queryTalks);
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

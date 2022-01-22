import { client } from '@gql/graphql-client';
import { queryStreams } from '@gql/queries';

export const get = async () => {
	try {
		const { streams } = await client.request(queryStreams, {
			todaysDate: new Date().toISOString()
		});
		return {
			status: 200,
			body: streams
		};
	} catch (error) {
		return {
			status: 404,
			body: error.message
		};
	}
};

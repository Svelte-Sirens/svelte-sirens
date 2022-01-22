import { client } from '@gql/graphql-client';
import { queryStreams } from '@gql/queries';

export const get = async (req) => {
	const { slug } = req.params;
	try {
		const variables = { slug };
		const { streams } = await client.request(queryStreams, variables);
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

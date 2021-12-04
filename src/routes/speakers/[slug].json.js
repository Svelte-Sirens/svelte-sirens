import { client } from '@gql/graphql-client';
import { querySpeaker } from '@gql/queries';

export const get = async (req) => {
	const { slug } = req.params;
	try {
		const variables = { slug };
		const { speakers } = await client.request(querySpeaker, variables);
		return {
			status: 200,
			body: speakers
		};
	} catch (error) {
		return {
			status: 404,
			body: error.message
		};
	}
};

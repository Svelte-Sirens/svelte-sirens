import { client } from '@gql/graphql-client';
import { querySpeakers } from '@gql/queries';

export const get = async () => {
	try {
		const { speakers } = await client.request(querySpeakers);
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

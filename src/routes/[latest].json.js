import { client } from '@gql/graphql-client';
import { queryLatest } from '@gql/queries';

export const get = async () => {
	try {
		const latest = await client.request(queryLatest, {
			todaysDate: new Date().toISOString()
		});
		return {
			status: 200,
			body: latest
		};
	} catch (error) {
		return {
			status: 404,
			body: error.message
		};
	}
};

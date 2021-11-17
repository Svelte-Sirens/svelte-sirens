import { gql, GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(import.meta.env.VITE_GRAPHQL_API);

export const get = async () => {
	try {
		const query = gql`
			{
				events {
					title
					id
					datetime_event
					speakers {
						name
						handle
						picture {
							id
							url
						}
					}
				}
			}
		`;
		const { events } = await client.request(query);
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

// import { events } from '@api/events.js';

// export const get = async () => {
// 	try {
// 		return {
// 			status: 200,
// 			body: { events }
// 		};
// 	} catch (error) {
// 		return {
// 			status: 500,
// 			body: [
// 				{
// 					error: error.message
// 				}
// 			]
// 		};
// 	}
// };

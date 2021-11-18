import { gql, GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(import.meta.env.VITE_GRAPHQL_API);

export const get = async () => {
	try {
		const query = gql`
			{
				events(orderBy: datetime_event_ASC) {
					slug
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

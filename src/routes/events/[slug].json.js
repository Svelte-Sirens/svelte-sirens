import { gql, GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(import.meta.env.VITE_GRAPHQL_API);

export const get = async (req) => {
	const { slug } = req.params;
	try {
		const query = gql`
			query Events($slug: String!) {
				events(where: { slug: $slug }) {
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
		const variables = { slug };
		const { events } = await client.request(query, variables);
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

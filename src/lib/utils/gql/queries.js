import { gql } from 'graphql-request';

export const queryEvents = gql`
	query Events {
		events(orderBy: datetime_event_ASC) {
			slug
			title
			id
			datetime_event
			speakers {
				name
				handle
				handleUrl
				slug
				picture {
					id
					url
				}
			}
		}
	}
`;

export const queryEvent = gql`
	query Event($slug: String!) {
		events(where: { slug: $slug }) {
			slug
			title
			id
			datetime_event
			speakers {
				name
				handle
				handleUrl
				slug
				picture {
					id
					url
				}
			}
		}
	}
`;

export const querySpeakers = gql`
	query Speakers {
		speakers {
			name
			slug
			biography
			picture {
				id
				url
			}
		}
	}
`;

export const querySpeaker = gql`
	query Speaker($slug: String!) {
		speakers(where: { slug: $slug }) {
			name
			slug
			biography
			picture {
				id
				url
			}
		}
	}
`;
